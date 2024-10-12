import {Subjects} from "./subjects";

export interface UserEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string;
        email: string;
        password: string;
    };
}