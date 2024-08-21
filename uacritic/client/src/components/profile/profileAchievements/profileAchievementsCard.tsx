import {FC} from "react";

interface ProfileAchievementsCardProps{
    readonly title:string,
    readonly description:string,
    readonly imageUrl?:string;
    done: boolean;
}

const ProfileAchievementsCard:FC<ProfileAchievementsCardProps> = ({title, description, imageUrl, done}) =>{
    return <div className=" text-white sm:h-[42vw] md:h-[20vw] lg:h-[14vw] sm:w-[40vw] md:w-[18vw] lg:w-[12vw] bg-primaryText rounded-3xl flex flex-col hover:scale-90">
        <div className="sm:h-[20vw] md:h-[8vw]">

        </div>
        <div className="flex flex-col sm:px-[3vw] md:px-[2vw] lg:px-[1vw]">
            <p className="mx-auto sm:text-[4vw] md:text-[1.4vw] lg:text-[1vw] md:h-[2.6vw] lg:h-[1.6vw]">{title}</p>
            <div className="sm:w-[26vw] md:w-[12vw] lg:w-[8vw] mx-auto bg-gray-200 rounded-full sm:h-2 md:h-3">
                <div className="bg-green-600 sm:h-2 md:h-3 rounded-full w-[60%]"></div>
            </div>
            <p className="lg:text-[0.7vw] md:text-[1.2vw] sm:text-[3vw] break-words md:h-[4vw] sm:h-[6vw]">{description}</p>
        </div>
    </div>
};

export default ProfileAchievementsCard;