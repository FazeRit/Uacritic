'use client';

import {useEffect, useState} from 'react';
import useRequest from '@/hooks/useRequest';
import {CardItem} from '@/lib/utils/CardProps';
import Link from 'next/link';
import Card from '@/components/ui/Сard/Card';
import Loading from "@/components/ui/Loading/Loading";
import ErrorFetching from "@/components/ui/ErrorFetching/ErrorFetching";

interface CardContainerProps<T> {
    url: string;
    token: string;
    params?: Record<string, any>;
    title: string;
    linkToPopular: string;
    category: 'movies' | 'serials' | 'music' | 'games';
    createMethod: (data: T, category: 'movies' | 'serials' | 'music' | 'games') => CardItem[];
}

const CardContainer = <T, >({
                                url,
                                token,
                                params,
                                title,
                                linkToPopular,
                                createMethod,
                                category
                            }: CardContainerProps<T>) => {
    const [items, setItems] = useState<CardItem[]>([]);
    const {data: fetchedItems, isLoading, error, fetchData} = useRequest<T>({
        method: 'GET',
        url,
        token,
        params,
    });

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (fetchedItems) {
            setItems(createMethod(fetchedItems, category).slice(0, 4));
        }
    }, [fetchedItems, createMethod]);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (error || !items) {
        return (
            <ErrorFetching />
        );
    }

    return (
        <div>
            <div className="flex flex-row text-primaryText roboto-bold sm:mt-[5vw] md:mt-[2vw] w-full justify-between">
                <p className="sm:text-[4vw] md:text-[3vw] lg:text-[2vw] sm:w-[72vw] md:w-[60vw] sm:mt-[1vw] md:mt-0">
                    Популярні {title}
                </p>
                <div className="flex flex-row w-full mt-[1vw]">
                    <Link href={linkToPopular} className="ml-auto roboto-thin flex flex-row">
                        Переглянути всі
                        <div>
                            <svg className="ml-2 mt-[2px]" width="23" height="20" viewBox="0 0 23 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5"
                                      d="M22.8082 10L12.6701 20L11.7005 19.0436L20.1794 10.6801H0.808228V9.31987H20.1794L11.7005 0.956429L12.6701 0L22.8082 10Z"
                                      fill="#364F6B"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="my-[2vw] sm:mx-[0vw] md:mx-0 lg:mx-[4vw]">
                <ul className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
                    {items.map((item, index) => (
                        <li className="sm:w-[40vw] lg:w-[16vw] md:w-[20vw]" key={index}>
                            <Card item={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;