import {Message} from "node-nats-streaming";
import {Listener} from "./listener";
import {UserEvent} from "./user-event";
import {Subjects} from "./subjects";

export class UserCreatedListener extends Listener<UserEvent> {
    readonly subject = Subjects.UserCreated;
    queueGroupName = 'user-service';

    onMessage(data: UserEvent['data'], msg: Message) {
        console.log('Event data!', data);

        msg.ack();
    }
}
