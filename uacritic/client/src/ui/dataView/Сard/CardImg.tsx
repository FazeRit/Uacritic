import {FC} from "react";
import Image from "next/image";

import {CardImgProps} from "@/lib/utils/Card/cardProps";

const CardImg: FC<CardImgProps> = ({title, imageUrl}) => {
    return (
        <div className="lg:w-[16vw] sm:w-[40vw] md:w-[20vw] rounded-xl lg:h-[14vw] sm:h-[10rem] relative">
            <Image width={300} height={300}
                   className="lg:w-[16vw] sm:w-[40vw] md:w-[20vw] rounded-xl lg:h-[14vw] sm:h-[10rem]"
                   src={imageUrl}
                   alt={title}/>
        </div>
    );
}

export default CardImg;