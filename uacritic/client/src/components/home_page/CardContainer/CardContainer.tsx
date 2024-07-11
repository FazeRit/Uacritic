import { FC } from "react";
import Card from "./Сard/Card";
import {CardProps, chooseCategory} from "@/data_models/CardProps";
import Link from 'next/link';


const DUMMY_MOVIES: CardProps[] = [
    {
        id: 1,
        category: 'movies',
        item: {
            value: 10,
            rate: 9.0,
            title: "Три метри над рівнем моря",
            liked: false,
            imageUrl: "https://via.placeholder.com/300x200.png?text=Movie+1"
        }
    },
    {
        id: 2,
        category: 'movies',
        item: {
            value: 20,
            rate: 8.5,
            title: "Фильм 2",
            liked: true,
            imageUrl: "https://via.placeholder.com/300x200.png?text=Movie+2"
        }
    },
    {
        id: 3,
        category: 'movies',
        item: {
            value: 12,
            rate: 8.7,
            title: "Фильм 3",
            liked: true,
            imageUrl: "https://via.placeholder.com/300x200.png?text=Movie+3"
        }
    },
    {
        id: 4,
        category: 'music',
        item: {
            value: 15,
            rate: 8.9,
            title: "Фильм 4",
            liked: true,
            imageUrl: "https://via.placeholder.com/300x200.png?text=Movie+4"
        }
    },
];

const CardContainer: FC<{title:string}> = ({title}) => {
    return (
        <div>
            <div className="flex flex-row text-primaryText roboto-bold mt-[2vw] w-full justify-between">
                <p className="sm:text-[4vw] md:text-[3vw] lg:text-[2vw] w-[60vw] ">ТОП 100 {title}</p>
                <div className="flex flex-row w-full mt-[1vw]">
                    {/*TODO: Add Link to the page with all top movies*/}
                    <Link href='/' className="ml-auto roboto-thin flex flex-row ">Переглянути всі
                        <svg className="ml-2 mt-[2px]" width="23" height="20" viewBox="0 0 23 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.5"
                                d="M22.8082 10L12.6701 20L11.7005 19.0436L20.1794 10.6801H0.808228V9.31987H20.1794L11.7005 0.956429L12.6701 0L22.8082 10Z"
                                fill="#364F6B"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="my-[2vw] sm:mx-[0vw] md:mx-0 xl:mx-[4vw]">
                <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
                    {DUMMY_MOVIES.map(({id, item, category}) => (
                        <Card key={id} item={item} category={category}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;