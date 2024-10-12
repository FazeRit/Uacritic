import {Subjects} from "./subjects";
import {Publisher} from "./publisher";
import {UserEvent} from "./user-event";

export class UserCreatedPublisher extends Publisher<UserEvent> {
    subject: Subjects.UserCreated = Subjects.UserCreated;
}