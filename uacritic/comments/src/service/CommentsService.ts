import { Category } from './../../node_modules/.prisma/client/index.d';
import {ApiError} from "@uacritic/uacritic_common";
import prisma from '../db/db';

import {CommentCreatedPublisher} from '../events/publisher/comment-created-publisher';

import {natsWrapper} from "../natsWrapper";

interface Comment {
    email: string;
    text: string;
    rating: number;
    category: Category;
    itemId: number;
}

export default class CommentsService {
    static async userComments(
        email: string
      ) {
        const comments = await prisma.comment.findMany({
            where: {
                user: {email}
            }
        });

        if (!comments) throw ApiError.BadRequestError("No comments found");

        return comments;
    }

    static async itemComments(
        category: Comment['category'], 
        itemId: number
      ) {
        const comments = await prisma.comment.findMany({
            where: {
                category,
                itemId
            },
            include: {
                user: {
                    select: {
                        username: true
                    }
                }
            }
        });

        if (!comments) throw ApiError.BadRequestError("No comments found");

        return comments.map((comment: any) => ({
            username: comment.user?.username || "Unknown User",
            text: comment.text,
            rating: comment.rating,
        }));
    }

    static async addComment(
        email: string,
        text: string,
        rating: number,
        category: Comment['category'],
        itemId: number,
        tags: { id: number; name: string }[]
    ) {
        const tagNames = tags.map(tag => tag.name);
    
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) throw ApiError.UnAuthorizedError();
    
        const comment = await prisma.comment.create({
            data: {
                text,
                rating,
                category,
                itemId,
                tags: tagNames,
                user: { connect: { id: user.id } }
            },
        });
        if (!comment) throw ApiError.BadRequestError("Failed to add comment");
    
        new CommentCreatedPublisher(natsWrapper.client).publish({
            userId: user.id,
            itemId,
            tags: tagNames
        });
    
        return comment;
    }
    
}