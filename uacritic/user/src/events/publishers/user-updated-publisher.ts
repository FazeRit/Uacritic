import {Publisher, Subjects, UserUpdatedEvent} from "@uacritic/uacritic_common";

export class UserUpdatedPublisher extends Publisher<UserUpdatedEvent> {
    subject: Subjects.UserUpdated = Subjects.UserUpdated;
}
