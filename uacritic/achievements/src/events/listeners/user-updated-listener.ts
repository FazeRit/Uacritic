import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserUpdatedEvent, ApiError } from "@uacritic/uacritic_common";
import Profile from "../../models/profileModel";

export class UserUpdatedListener extends Listener<UserUpdatedEvent> {
    subject: Subjects.UserUpdated = Subjects.UserUpdated;
    queueGroupName = 'profile-service';

    async onMessage(data: UserUpdatedEvent['data'], msg: Message) {
        try {
            const { id, fieldName, fieldValue } = data;

            if (fieldName === 'birthDate') return;

            console.log(id);

            const existingUser = await Profile.findOne({ id });

            if (existingUser) {
                const user = await Profile.updateOne(
                    { id },
                    { $set: { [fieldName]: fieldValue } }
                );

                console.log(`User updated successfully:`, user);
            } else {
                throw ApiError.BadRequestError(`User not found`);
            }

            msg.ack();
        } catch (err) {
            console.error('Error processing message:', err);
        }
    }
}
