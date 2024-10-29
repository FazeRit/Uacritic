import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserCreatedEvent, ApiError }  from "@uacritic/uacritic_common";

import Profile from "../../models/profileModel";

export class UserCreatedListener extends Listener<UserCreatedEvent>{
    subject: Subjects.UserCreated = Subjects.UserCreated;
    queueGroupName = 'profile-service';  

    async onMessage(data: UserCreatedEvent['data'], msg: Message) {
        try {
            const { id, email, username, password } = data;

            const existingUser = await Profile.findOne({ id });
    
            if (!existingUser) {
                const user = await Profile.create({
                    id,
                    email,
                    username,
                    password
                })

                console.log(`User created successfully:`, user);  
            } else {
                throw ApiError.BadRequestError(`Email is used`);
            }
    
            msg.ack();
        } catch (err) {
            console.error('Error processing message:', err);
        }
    }
}