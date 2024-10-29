import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserUpdatedEvent, ApiError } from "@uacritic/uacritic_common";

import prisma from "../../db/db";

export class UserUpdatedListener extends Listener<UserUpdatedEvent>{
    subject: Subjects.UserUpdated = Subjects.UserUpdated;
    queueGroupName = 'user-service';

    async onMessage(data: UserUpdatedEvent['data'], msg: Message){
        try{
            const {id, fieldName, fieldValue} = data;

            if(fieldName === 'birthDate') return;

            const existingUser = await prisma.user.findUnique({
                where: { id }
            });

            if(existingUser){
                const user = await prisma.user.update({
                    where:{
                        id
                    },
                    data:{
                        [fieldName]: fieldValue
                    }
                })

                console.log(`User updated successfully:`, user);
            }else {
                throw ApiError.BadRequestError(`Error updating user`);
            }

            msg.ack();
        }catch (err) {
            console.error('Error processing message:', err);
        }
    }
}