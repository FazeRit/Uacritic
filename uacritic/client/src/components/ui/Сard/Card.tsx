import {FC, Suspense} from "react";
import Link from 'next/link';
import CardImg from "./CardImg";
import CardRate from "./CardRate";
import {CardItem} from "@/utils/CardProps";

const Card: FC<{ item: CardItem }> = ({ item }) => {
    return (
        <Suspense fallback={<p>Завантажування даних</p>}>
            <div className="flex flex-col sm:w-[40vw] lg:w-[16vw] md:w-[20vw] bg-primaryText text-white md:h-[23vw] lg:h-[18vw] sm:min-h-[14rem] rounded-2xl transform transition-transform duration-300 hover:scale-105">
                <CardImg title={item.title} imageUrl={item.imageUrl}/>
                <div className="flex flex-row mx-[1vw] lg:mt-[0.5vw] md:mt-[0.8vw] sm:mt-[1vw] min-h-[1.5vw]">
                    {/*TODO: Make Link path */}
                    <Link href={`/movies/:{item.id}`} className="sm:text-[3vw] md:text-[1.5vw] md:ml-0 sm:ml-[1vw] lg:text-[1vw] roboto-medium lg:h-[7vw] lg:w-[9vw] sm:w-[20vw] break-words">{item.title.length <= 15 ? item.title: item.title.slice(0, 10) + '...'}</Link>
                    <CardRate rate={item.rate}/>
                    <div className="lg:ml-[1vw] sm:ml-[2vw] md:ml-[0.5vw] sm:h-[4vw] md:w-[3vw] lg:mt-[] md:h-[3vw] lg:h-[2vw] lg:w-[2vw]">
                            <svg
                                className="cursor-pointer sm:w-[5vw] sm:h-[5vw] md:w-[3vw] lg:h-[1.5vw] lg:mt-[0.1vw] lg:w-[2vw] md:h-[3vw]"
                                width="2vw" height="2vw" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_21_17)">
                                    <path
                                        d="M31.2785 4.82941C29.4981 3.04905 27.1411 2.07598 24.6255 2.07598C22.11 2.07598 19.7458 3.05626 17.9654 4.83662L17.0356 5.76645L16.0913 4.82221C14.311 3.04184 11.9395 2.05435 9.42396 2.05435C6.9156 2.05435 4.55139 3.03463 2.77823 4.80779C0.997863 6.58816 0.0175813 8.95237 0.0247892 11.4679C0.0247892 13.9835 1.01228 16.3405 2.79264 18.1209L16.3292 31.6574C16.5166 31.8448 16.7689 31.9457 17.0139 31.9457C17.259 31.9457 17.5113 31.852 17.6987 31.6646L31.2641 18.1497C33.0444 16.3694 34.0247 14.0051 34.0247 11.4896C34.0319 8.97399 33.0589 6.60978 31.2785 4.82941ZM29.8946 16.773L17.0139 29.6032L4.16216 16.7514C2.7494 15.3386 1.97094 13.4645 1.97094 11.4679C1.97094 9.47134 2.74219 7.59727 4.15495 6.19172C5.5605 4.78617 7.43457 4.00771 9.42396 4.00771C11.4206 4.00771 13.3018 4.78617 14.7146 6.19893L16.3436 7.82792C16.7256 8.20995 17.3383 8.20995 17.7203 7.82792L19.3349 6.21334C20.7477 4.80058 22.6289 4.02212 24.6183 4.02212C26.6077 4.02212 28.4818 4.80058 29.8946 6.20613C31.3073 7.61889 32.0786 9.49296 32.0786 11.4896C32.0858 13.4862 31.3073 15.3602 29.8946 16.773Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_21_17">
                                        <rect width="34" height="34" fill="white" transform="translate(0.0247192)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Card;