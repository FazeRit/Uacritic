import React, { FC } from "react";
import { CardImgProps } from "@/data_models/CardProps";
import { chooseCategory } from "@/data_models/CardProps";

const CardImg: FC<CardImgProps> = ({ category, title, value, imageUrl }) => {
    return (
        <div className="lg:w-[14vw] sm:w-[36vw] md:w-[18vw] mt-[1.5vw] sm:mt-[1vw] rounded-xl lg:h-[12.5vw] sm:h-[10rem] relative">
            <img className="lg:w-[14vw] sm:mx-[2vw] sm:w-[36vw] md:w-[18vw] md:mx-[1vw] lg:mx-[1vw] rounded-xl lg:h-[12.5vw] sm:h-[10rem]" src={imageUrl} alt={title}></img>
            <div className="shadow-card"><p className="absolute bottom-0 w-full text-center mb-1 md:text-[1.2vw] lg:text-[1vw]">
                {chooseCategory(category)} {value}</p></div>
        </div>
    );
}

export default CardImg;