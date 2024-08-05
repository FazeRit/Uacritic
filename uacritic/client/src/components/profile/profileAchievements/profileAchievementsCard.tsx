import {ProfileAchievementsCardProps} from "@/data_models/ProfileAchevementsCardProps";
import {FC} from "react";

const ProfileAchievementsCard:FC<ProfileAchievementsCardProps> = ({title, description, imageUrl, done}) =>{
    return <div className=" text-white lg:h-[12vw] lg:w-[12vw] bg-primaryText rounded-3xl flex flex-col hover:scale-90">
        <div className="lg:h-[8vw]">

        </div>
        <div className="flex flex-col lg:px-[1vw] ">
            <p className="mx-auto lg:text-[1vw] lg:h-[2vw]">{title}</p>
            <p className="lg:text-[0.7vw] lg:h-[4vw] break-words">{description}</p>
        </div>
    </div>
};

export default ProfileAchievementsCard;