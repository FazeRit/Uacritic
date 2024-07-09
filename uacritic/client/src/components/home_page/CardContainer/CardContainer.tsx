import { FC } from "react";
import Card from "./Сard/Card";
import {CardProps} from "@/data_models/CardProps";
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
        category: 'movies',
        item: {
            value: 15,
            rate: 8.9,
            title: "Фильм 4",
            liked: true,
            imageUrl: "https://via.placeholder.com/300x200.png?text=Movie+4"
        }
    },
];

const CardContainer: FC = () => {
    return (
        <div>
            <div className="flex flex-row text-primaryText roboto-bold w-full justify-between">
                <p className="text-3xl w-[20rem] ">ТОП 100 фільми</p>
                <div className="flex flex-row w-50 mt-5">
                    {/*TODO: Add Link to the page with all top movies*/}
                    <Link href='/' className="roboto-thin flex flex-row">Переглянути всі
                        <svg className="ml-2  mt-[2px]" width="23" height="20" viewBox="0 0 23 20" fill="none"
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
            <div className="my-5 flex flex-row mx-20">
                <ul className="flex flex-row card-ul w-full">
                    {DUMMY_MOVIES.map(({ id, item, category }) => (
                        <Card key={id} item={item} category={category} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;