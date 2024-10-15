import {Subjects} from "./subjects";

export interface UserEvent {
    subject: Subjects.UserCreated;
    data: {
        id: number;
        email: string;
        password: string;
    };
}