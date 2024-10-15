import {Subjects} from './subjects';

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string;
        email: string;
        username: string;
        password: string;
    };
}
