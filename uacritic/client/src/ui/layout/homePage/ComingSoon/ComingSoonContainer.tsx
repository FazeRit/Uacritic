'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';

import useRequest from '@/hooks/useRequest';

import ErrorFetching from "@/ui/status/FetchingError/FetchingError";
import ComingSoonText from './ComingSoonText/ComingSoonText';

import {CardItem} from "@/lib/models/Card/cardProps";

interface ComingSoonContainerProps<T> {
    url: string;
    token: string;
    params?: Record<string, any>;
    createMethod: (data: T, category: 'MOVIES' | 'SERIALS' | 'GAMES') => CardItem[];
    reverse?: boolean;
    category: 'MOVIES' | 'SERIALS' | 'GAMES';
}

const ComingSoonContainer = <T, >({
                                      url,
                                      token,
                                      params,
                                      createMethod,
                                      reverse = false,
                                      category
                                  }: ComingSoonContainerProps<T>) => {
    const [item, setItem] = useState<CardItem | null>(null);
    const {data: fetchedItems, isLoading, error, fetchData} = useRequest<T>({
        method: 'GET',
        url,
        withCredentials: false,
        token,
        params,
    });

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (fetchedItems) {
            const cardItems = createMethod(fetchedItems, category);
            if (cardItems.length > 0) {
                setItem(cardItems[Math.floor(Math.random() * cardItems.length)]);
            }
        }
    }, [fetchedItems, createMethod]);

    const title = item?.title || "Unknown Title";
    const description = item?.description || "No description available";
    const imageUrl = item?.imageUrl || "https://via.placeholder.com/500x750?text=No+Image";

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center">
                    <div className="loader"></div>
                    <p className="mt-4 text-lg text-gray-600">Fetching data...</p>
                </div>
                <style jsx>{`
                    .loader {
                        border: 8px solid #f3f3f3;
                        border-radius: 50%;
                        border-top: 8px solid #3498db;
                        width: 50px;
                        height: 50px;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <ErrorFetching/>
        );
    }

    return (
        <div
            className="border-t-lineMain border-t-[3px] md:border-l-[3px] md:border-r-[3px] border-l-lineMain border-r-lineMain mt-[4vw]">
            <div className="flex flex-col">
                <div className="flex flex-row mt-[0.5vw] sm:p-[2vw] w-full">
                    {reverse ? (
                        <>
                            <div
                                className="sm:mr-[2vw] lg:ml-[2vw] md:mt-[1vw] lg:mt-[3vw] sm:w-[40vw] md:w-[80vw] lg:w-[50vw]">
                                <ComingSoonText
                                    title={title}
                                    description={description}
                                    category={item?.category!}
                                    id={item?.id!}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] sm:ml-[17vw] lg:ml-[13vw] md:ml-[2vw] roboto-bold text-primaryText">
                                    Coming soon
                                </p>
                                <Image
                                    className="sm:w-[40vw] sm:h-[40vw] md:w-[30vw] ml-auto md:h-[30vw] mt-[1vw] rounded-3xl"
                                    src={imageUrl}
                                    height={500}
                                    width={500}
                                    alt={title}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col">
                                <p className="sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] roboto-bold text-primaryText">
                                    Coming soon
                                </p>
                                <Image
                                    className="sm:w-[40vw] sm:h-[40vw] md:w-[30vw] ml-auto md:h-[30vw] mt-[1vw] rounded-3xl"
                                    height={500}
                                    width={500}
                                    src={imageUrl}
                                    alt={title}
                                />
                            </div>
                            <div
                                className="sm:ml-[4vw] md:ml-[2vw] lg:mr-[2vw] md:mt-[1vw] lg:mt-[3vw] sm:w-[30vw] md:w-[80vw] lg:w-[50vw]">
                                <ComingSoonText
                                    title={title}
                                    description={description}
                                    category={item?.category!}
                                    id={item?.id!}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="sm:mt-[1vw] lg:w-[20vw] sm:w-[80vw] md:hidden break-words sm:p-[2vw]">
                    <p className="md:mt-[0.5vw] lg:mt-[1vw] roboto-black sm:text-[5vw] md:text-[2vw] lg:text-[1.5vw] text-primaryText">Description</p>
                    <p className="md:mt-[0.5vw] lg:mt-[1vw] md:text-[1.5vw] roboto-regular lg:text-[1.3vw]">
                        {description}
                    </p>
                </div>
            </div>
            <div>
                {reverse ? (
                    <div>
                        <svg className="sm:w-full w-full h-auto" viewBox="0 0 1214 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="-0.000825081" y1="17.3066" x2="1216" y2="15.3" stroke="#646363"/>
                            <rect x="1136" width="80" height="15.5" fill="#646363"/>
                            <path d="M1136 0.800049L1104 14.8H1136V0.800049Z" fill="#646363" stroke="#646363"/>
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg className="sm:w-full w-full h-auto" viewBox="0 0 1214 16.1" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="1216" y2="-0.5"
                                  transform="matrix(0.999999 -0.00164948 0.00165084 0.999999 0 16)" stroke="#646363"/>
                            <rect width="80" height="15.4936" fill="#646363"/>
                            <path d="M80 1L112 14.9942H80V1Z" fill="#646363" stroke="#646363"/>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComingSoonContainer;