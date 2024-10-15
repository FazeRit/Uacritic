import {Publisher, Subjects, UserCreatedEvent} from "@uacritic/uacritic_common";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
    subject: Subjects.UserCreated = Subjects.UserCreated;
}
