import { Message } from "node-nats-streaming";
import { Subjects, Listener, CommentCreatedEvent, ApiError } from "@uacritic/uacritic_common";
import { Achievement } from "../../models/achievementModel";
import Profile from "../../models/profileModel";
import mongoose, { ObjectId } from "mongoose";

export class CommentCreatedListener extends Listener<CommentCreatedEvent> {
  subject: Subjects.CommentCreated = Subjects.CommentCreated;
  queueGroupName = "comment-service";

  async onMessage(data: CommentCreatedEvent["data"], msg: Message) {
    try {
      const { userId, tags } = data;

      const profile = await Profile.findOne({ id: userId });
      if (!profile) {
        throw ApiError.BadRequestError(`User with ID ${userId} not found`);
      }

      const achievements = await Achievement.find({ triggerTags: { $in: tags } });
      if (!achievements.length) return msg.ack();

      const updatedAchievements = achievements.map((achievement) => {
        const achievementId = achievement._id as ObjectId;
        const existingAchievement = profile.achievements.find(a => a.achievementId.toString() === achievementId.toString());

        if (existingAchievement) {
          return this.updateExistingAchievement(existingAchievement, achievement);
        } else {
          return this.createNewAchievement(achievementId, achievement);
        }
      }).filter(Boolean);

      if (updatedAchievements.length) {
        profile.achievements.push(...updatedAchievements);
        await profile.save();
      }

      msg.ack();
    } catch (err) {
      console.error("Error processing message:", err);
    }
  }

  private updateExistingAchievement(existingAchievement: any, achievement: any) {
    if (existingAchievement.progress < achievement.maxProgress) {
      existingAchievement.progress += 1;

      if (existingAchievement.progress === achievement.maxProgress) {
        existingAchievement.status = true;
        existingAchievement.dateAchieved = new Date();
      }
      return existingAchievement;
    }
    
    return null;
  }

  private createNewAchievement(achievementId: ObjectId, achievement: any) {
    return {
      achievementId,
      dateAchieved: achievement.maxProgress === 1 ? new Date() : null,
      progress: 1,
      points: achievement.points,
      status: achievement.maxProgress === 1,
    };
  }
}
