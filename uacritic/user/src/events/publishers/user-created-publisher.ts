import {Publisher, Subjects, UserEvent} from "@uacritic/uacritic_common";

export class UserCreatedPublisher extends Publisher<UserEvent> {
    subject: Subjects.UserCreated = Subjects.UserCreated;
}
