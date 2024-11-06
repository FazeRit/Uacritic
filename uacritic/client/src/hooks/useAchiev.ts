import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchAchievements = async () => {
    const { data: userAchiev } = await axios.get(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/achievements/userAchievements`,
        { withCredentials: true }
    );

    const { data: generalAchiev } = await axios.get(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/achievements/`,
        { withCredentials: true }
    );

    const achievements = generalAchiev.map((achiev: any) => {
        const userAchievement = userAchiev.find((userAch: { id: any }) => userAch.id === achiev.id);

        return {
            id: achiev.id,
            name: achiev.name,
            description: achiev.description,
            maxProgress: achiev.maxProgress,
            points: achiev.points,
            progress: userAchievement?.progress || 0,  
            status: userAchievement?.status || false,
        };
    });

    return achievements;
};

const useAchiev = () => {
    return useQuery({
        queryKey: ['achievements'],
        queryFn: fetchAchievements,
    });
};

export { useAchiev, fetchAchievements };
