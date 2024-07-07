import { FC } from "react";
import Card from "./Card";
import CardProps from "../../../data_models/CardProps";
import {Link} from "react-router-dom";


const DUMMY_MOVIES: CardProps[] = [
    {
        id: 1,
        category:'movies',
        item:{
            value: 10,
            rate: 9.0,
            title: "Фильм 1",
            liked: false,
            imageUrl: "https://example.com/image1.jpg"
        }
    },
    {
        id: 2,
        category:'movies',
        item:{
            value: 20,
            rate: 8.5,
            title: "Фильм 2",
            liked: true,
            imageUrl: "https://example.com/image2.jpg"
        }
    },
    {
        id: 3,
        category:'movies',
        item:{
            value: 12,
            rate: 8.7,
            title: "Фильм 3",
            liked: true,
            imageUrl: "https://example.com/image3.jpg"
        }
    },
    {
        id: 4,
        category:'movies',
        item:{
            value: 15,
            rate: 8.9,
            title: "Фильм 4",
            liked: true,
            imageUrl: "https://example.com/image4.jpg"
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
                    <Link to='/' className="roboto-thin flex flex-row">Переглянути всі
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
                    {DUMMY_MOVIES.map(({ id, category, item }) => (
                        <Card key={id} item={item} category={category} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;