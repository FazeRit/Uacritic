import {UserEvent} from "./user-event";
import {Subjects} from "./subjects";
import {Stan} from "node-nats-streaming";

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Publisher<T extends UserEvent> {
    abstract subject: T['subject'];
    private client: Stan;

    constructor(client: Stan) {
        this.client = client;
    }

    publish(data: T['data']) {
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                console.log('Event published');
            });
        })
    }
}