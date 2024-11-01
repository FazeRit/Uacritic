import {Publisher, Subjects, CommentCreatedEvent} from "@uacritic/uacritic_common";

export class CommentCreatedPublisher extends Publisher<CommentCreatedEvent> {
    subject: Subjects.CommentCreated = Subjects.CommentCreated;
}