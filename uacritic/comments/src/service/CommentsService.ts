import {PrismaClient} from "@prisma/client";
import {ApiError} from "@uacritic/uacritic_common";

const prisma = new PrismaClient();

interface Comment {
    email: string;
    text: string;
    rating: number;
    category: "movies" | "games" | "series";
    itemId: number;
}

export default class CommentsService {
    static async userComments(email: string) {
        const comments = await prisma.comment.findMany({
            where: {
                user: {email}
            }
        });

        if (!comments) {
            throw ApiError.DatabaseError();
        }
    }

    static async itemComments(category: string, itemId: number) {
        const comments = await prisma.comment.findMany({
            where: {
                category,
                itemId
            }
        });

        if (!comments) throw ApiError.DatabaseError();

        return comments;
    }

    static async addComment(email: string, text: string, rating: number, category: "movies", itemId: number) {
        const user = await prisma.user.findUnique({
            where: {email},
        });

        if (!user) {
            return ApiError.UnAuthorizedError();
        }

        const comment = await prisma.comment.create({
            data: {
                text,
                rating,
                category,
                itemId,
                user: {connect: {id: user.id}}
            },
        });
        if (!comment) {
            throw ApiError.DatabaseError();
        }


    }
}