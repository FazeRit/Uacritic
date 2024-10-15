import {Subjects} from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: number;
        field: {
            [key: string]: string | Date;
        };
    };
}