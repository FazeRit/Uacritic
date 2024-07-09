import React, {FC} from "react";
import {CardImgProps} from "@/data_models/CardProps";
import {chooseCategory} from "@/data_models/CardProps";

const CardImg:FC<CardImgProps> = ({category, title, value, imageUrl}) =>{
    return <>
        <div className="w-[18rem] mx-3 mt-4 rounded-xl h-[15rem] relative">
            <img className="w-[18rem] mx-auto rounded-xl h-[15rem]" src={imageUrl}
                 alt={title}></img>
            <div className="shadow-card"><p className="absolute bottom-0 w-full text-center mb-1">
                {chooseCategory(category)} {value}</p></div>
        </div>
    </>
}

export default CardImg