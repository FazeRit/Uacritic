import {Subjects} from "./subjects";

export interface CommentCreatedEvent {
    subject: Subjects.CommentCreated;
    data: {
        userId: number,
        itemId: number,
        tags: string[]
    };
}