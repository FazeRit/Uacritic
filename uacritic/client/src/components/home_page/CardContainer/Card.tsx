import React, { FC } from "react";
import MovieAndSerialProps  from "../../../data_models/CardProps";

const Card: FC<{ item: MovieAndSerialProps["item"], category: string }> = ({ item, category }) => {
    return (
        <div className="flex flex-col w-[20rem] bg-primaryText text-white h-[19rem]">
            <img className="w-[18rem] mx-auto mt-4 rounded-xl h-[15rem]" src='../../../assets/examples.jpg' alt={item.title}/> {/*item.imageUrl*/}
            <p>{item.value}</p>
            <div className="flex flex-row">
                <p>{item.title}</p>
                <p>{item.rate}</p>
                <p>{item.liked}</p>
            </div>
        </div>
    );
};

export default Card;