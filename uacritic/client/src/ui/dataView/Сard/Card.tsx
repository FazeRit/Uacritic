import {FC, Suspense} from "react";
import Link from 'next/link';

import CardImg from "./CardImg";
import CardRate from "./CardRate";

import {CardItem} from "@/lib/utils/cardProps";

const Card: FC<{ item: CardItem }> = ({item}) => {
    return (
        <Suspense fallback={<p>Завантажування даних</p>}>
            <div
                className="flex flex-col sm:w-[40vw] lg:w-[16vw] md:w-[20vw] bg-primaryText text-white md:h-[23vw] lg:h-[18vw] sm:min-h-[14rem] rounded-2xl transform transition-transform duration-300 hover:scale-105">
                <CardImg title={item.title} imageUrl={item.imageUrl}/>
                <div
                    className="flex flex-row mx-[1vw] justify-between lg:mt-[0.5vw] md:mt-[0.8vw] sm:mt-[1vw] min-h-[1.5vw]">
                    <Link href={`/${item.category}/${item.id}`}
                          className="sm:text-[3vw] md:text-[1.5vw] md:ml-0 sm:ml-[1vw] lg:text-[1vw] roboto-medium lg:h-[7vw] lg:w-[9vw] sm:w-[20vw] break-words">{item.title.length <= 19 ? item.title : item.title.slice(0, 10) + '...'}</Link>
                    <CardRate rate={item.rate}/>
                </div>
            </div>
        </Suspense>
    );
};

export default Card;