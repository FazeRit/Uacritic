import {Message} from 'node-nats-streaming';
import {Listener} from './base-listener';
import {TicketCreatedEvent} from './ticket-created-event';
import {Subjects} from './subjects';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
    queueGroupName = 'user-service';

    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        console.log('Event data!', data);

        console.log(data.id);
        console.log(data.username);
        console.log(data.email);

        msg.ack();
    }
}
