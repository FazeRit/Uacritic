import ProfileAchievementsCard from './profileAchievementsCard';

const ProfileAchievements = () => {
    const DUMMY_LIST = [
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
        <section className="sm:w-full lg:w-[82vw] roboto-medium flex flex-col">
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:mt-[4vw] lg:mt-[2vw] sm:mx-auto lg:mx-10 sm:gap-[3vw] md:gap-[2vw]">
                {DUMMY_LIST.map(item => {
                    return <li key={item.title}><ProfileAchievementsCard title={item.title}
                                                                         description={item.description}
                                                                         done={item.done}/></li>
                })}
            </ul>
        </section>
    );
}

export default ProfileAchievements;