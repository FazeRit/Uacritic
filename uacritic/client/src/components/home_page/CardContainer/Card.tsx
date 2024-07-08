import React, { FC } from "react";
import { CardProps, chooseCategory } from "../../../data_models/CardProps";
import {Link} from "react-router-dom";

const Card: FC<{ item: CardProps["item"], category: string }> = ({ item, category }) => {
    return (
        <div className="flex flex-col w-[20rem] bg-primaryText text-white min-h-[19rem] rounded-2xl">
            <div className="w-[18rem] mx-3 mt-4 rounded-xl h-[15rem] relative">
                <img className="w-[18rem] mx-auto rounded-xl h-[15rem]" src='../../../assets/examples.jpg'
                     alt={item.title}></img>
                <p className="absolute bottom-0 w-full text-center">
                    {chooseCategory(category)} {item.value}</p>
            </div>
            <div className="flex flex-row mx-3 mt-1 min-h-10">
                {/*TODO: Make LInk path */}
                <Link to="/" className="text-lg roboto-medium w-[9rem] break-words">{item.title.length <= 20 ? item.title: item.title.slice(0, 12) + '...'}</Link>
                <div className="flex flex-row ml-[1rem]">
                    <p className="mr-1 text-lg roboto-medium">{item.rate.toFixed(1)}</p>
                    <svg className="mt-[0.3rem]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.9284 0.534379L11.9113 4.60223C12.0492 4.88515 12.3158 5.08119 12.6243 5.12649L17.0584 5.77884C17.8352 5.8932 18.1451 6.8593 17.5832 7.41363L14.3747 10.58C14.1517 10.8002 14.0498 11.1176 14.1026 11.4284L14.8599 15.8995C14.9926 16.6825 14.1807 17.2795 13.4861 16.9101L9.52023 14.7993C9.24444 14.6527 8.91475 14.6527 8.63896 14.7993L4.67311 16.9101C3.97851 17.2799 3.16657 16.6825 3.29932 15.8995L4.05663 11.4284C4.10944 11.1176 4.00749 10.8002 3.78451 10.58L0.57596 7.41363C0.0141252 6.85893 0.324016 5.89283 1.10076 5.77884L5.53493 5.12649C5.84335 5.08119 6.10997 4.88515 6.24786 4.60223L8.23079 0.534379C8.57772 -0.178126 9.5811 -0.178126 9.9284 0.534379Z"
                        fill="#ED8A19"/>
                </svg>
                </div>
                <p className="ml-[3rem]">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_17)">
                        <path d="M31.2785 4.82941C29.4981 3.04905 27.1411 2.07598 24.6255 2.07598C22.11 2.07598 19.7458 3.05626 17.9654 4.83662L17.0356 5.76645L16.0913 4.82221C14.311 3.04184 11.9395 2.05435 9.42396 2.05435C6.9156 2.05435 4.55139 3.03463 2.77823 4.80779C0.997863 6.58816 0.0175813 8.95237 0.0247892 11.4679C0.0247892 13.9835 1.01228 16.3405 2.79264 18.1209L16.3292 31.6574C16.5166 31.8448 16.7689 31.9457 17.0139 31.9457C17.259 31.9457 17.5113 31.852 17.6987 31.6646L31.2641 18.1497C33.0444 16.3694 34.0247 14.0051 34.0247 11.4896C34.0319 8.97399 33.0589 6.60978 31.2785 4.82941ZM29.8946 16.773L17.0139 29.6032L4.16216 16.7514C2.7494 15.3386 1.97094 13.4645 1.97094 11.4679C1.97094 9.47134 2.74219 7.59727 4.15495 6.19172C5.5605 4.78617 7.43457 4.00771 9.42396 4.00771C11.4206 4.00771 13.3018 4.78617 14.7146 6.19893L16.3436 7.82792C16.7256 8.20995 17.3383 8.20995 17.7203 7.82792L19.3349 6.21334C20.7477 4.80058 22.6289 4.02212 24.6183 4.02212C26.6077 4.02212 28.4818 4.80058 29.8946 6.20613C31.3073 7.61889 32.0786 9.49296 32.0786 11.4896C32.0858 13.4862 31.3073 15.3602 29.8946 16.773Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_21_17">
                            <rect width="34" height="34" fill="white" transform="translate(0.0247192)"/>
                        </clipPath>
                    </defs>
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Card;

