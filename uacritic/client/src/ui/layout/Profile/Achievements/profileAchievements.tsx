import Loading from '@/ui/status/Loading/Loading';
import ProfileAchievementsCard from './profileAchievementsCard';
import {useAchiev} from '@/hooks/useAchiev';
import ErrorFetching from '@/ui/status/FetchingError/FetchingError';

interface Achievement {
    id: number;
    name: string;
    description: string;
    triggerTags: string[];
    points: number;
    maxProgress: number;
    progress: number;
    status: boolean;
}

const ProfileAchievements = () => { 
    const { data, error, isFetching } = useAchiev();

    if (isFetching) return <Loading />;
    if (error) return <ErrorFetching />;

    return (
        <section className="w-full px-4 lg:px-8 flex flex-col items-center">
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 lg:mt-8 w-full max-w-[90vw] mx-auto">
                {data.map((item: Achievement) => (
                    <li key={item.id} className="flex justify-center">
                        <ProfileAchievementsCard 
                            name={item.name}
                            description={item.description}
                            status={item.status}
                            progress={item.progress}
                            maxProgress={item.maxProgress}
                            points={item.points}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProfileAchievements; 