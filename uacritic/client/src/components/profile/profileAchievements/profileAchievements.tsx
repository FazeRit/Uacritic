import { ProfileAchievementsCardProps } from "@/data_models/ProfileAchevementsCardProps";
import ProfileAchievementsCard from './profileAchievementsCard';

const ProfileAchievements = () => {
    const DUMMY_LIST:ProfileAchievementsCardProps[] = [
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: '312412412344444444444444444444444444444444444444444444444444444444444',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: 'Прокоментовано 10 хоррор фільмів',
            done: true
        },
        {
            title: 'маладець',
            description: '31241241234444444444444444444444444444444444444444444444444444444444',
            done: true
        }
    ]

    return (
        <section className="sm:w-full md:w-[68vw] lg:w-[82vw] roboto-medium flex flex-col">
            <p className="sm:text-[4vw] md:text-xl lg:text-2xl sm:w-[34vw] md:w-[10vw] sm:mt-[6vw] md:mt-0 lg:w-[8vw] mx-auto text-primaryText">Досягнення</p>
            <ul className="grid lg:grid-cols-6 lg:mt-[2vw] lg:ml-[4vw] lg:gap-[1vw]">
                {DUMMY_LIST.map(item =>{
                    return <li><ProfileAchievementsCard title={item.title} description={item.description} done={item.done}/></li>
                })}
            </ul>
        </section>
    );
}

export default ProfileAchievements;