import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserCreatedEvent, ApiError }  from "@uacritic/uacritic_common";    

import prisma from '../../db/db';

export class UserCreatedListener extends Listener<UserCreatedEvent>{
    subject: Subjects.UserCreated = Subjects.UserCreated;
    queueGroupName = 'user-service';  

    async onMessage(data: UserCreatedEvent['data'], msg: Message) {
        try {
            const { id, email, username } = data;

            const existingUser = await prisma.user.findUnique({
                where: { id }
            });
    
            if (!existingUser) {
                const user = await prisma.user.create({
                    data: {
                        id,
                        email,
                        username
                    }
                });

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