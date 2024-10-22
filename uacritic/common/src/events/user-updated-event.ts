import {Subjects} from "./subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: number;
        fieldName: string;
        fieldValue: string | Date;
    };
}