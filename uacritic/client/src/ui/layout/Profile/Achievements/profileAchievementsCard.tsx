import { FC } from "react";

interface Achievement {
    name: string;
    description: string;
    points: number;
    maxProgress: number;
    progress: number;
    status: boolean;
}

const ProfileAchievementsCard: FC<Achievement> = ({
    name,
    description,
    maxProgress,
    progress,
    points,
    status,
}) => {
    const progressPercentage = Math.min((progress / maxProgress) * 100, 100);
    const isCompleted = progress === maxProgress;

    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition-transform duration-300 bg-[#364F6B] hover:scale-105 flex flex-col justify-between text-bgMain">
            <div className="flex flex-col items-center text-center mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#F5F5F5]">
                    {name}
                </h3>
                <p className="text-[#B0BEC5] text-xs sm:text-sm md:text-base mb-4 px-2">
                    {description}
                </p>
            </div>

            <div className="relative w-full h-3 sm:h-4 bg-[#2B3A4E] rounded-full overflow-hidden mb-4 sm:mb-6">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4CAF50] to-[#81C784] transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            <div className="flex justify-between text-[#CFD8DC] font-medium text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                <span>{points} Points</span>
                <span>
                    {progress} / {maxProgress}
                </span>
            </div>

            <div
                className={`w-full py-1 sm:py-2 text-center rounded-lg text-[#364F6B] font-bold text-xs sm:text-sm md:text-base transition-opacity duration-300 ${
                    isCompleted ? 'opacity-100 bg-gradient-to-r from-[#FFD700] to-[#FFC107]' : 'opacity-0'
                }`}
            >
                Completed!
            </div>
        </div>
    );
};

export default ProfileAchievementsCard;
