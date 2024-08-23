'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import useRequest from "@/hooks/useRequest";
import { MovieDescription } from "@/utils/CardProps";
import { MovieDescriptionProps } from "@/utils/MovieDescriptionProps";
import { CardFactory } from "@/utils/CardFactory";

const ItemPage: FC<{ params: { id: number } }> = ({ params }) => {
    const [item, setItem] = useState<MovieDescription | null>(null);
    const { data: fetchedItem, isLoading, error, fetchData } = useRequest<MovieDescriptionProps>({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        token: process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!,
        params: {
            language: "uk-UA"
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (fetchedItem) {
            setItem(CardFactory.MovieDescriptionCreate(fetchedItem));
        }
    }, [fetchedItem]);

    if (isLoading) {
        return (
            <div className="text-center py-4">
                <p className="text-primaryText roboto-bold">Завантаження даних...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-4 text-red-500">
                <p className="roboto-bold">Помилка завантаження даних</p>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="text-center py-4">
                <p className="text-primaryText roboto-bold">Немає даних для відображення</p>
            </div>
        );
    }

    return (
        <div className="w-full lg:mx-4 bg-bgMain p-4 roboto-medium text-primaryText">
            <div className="bg-primaryText lg:w-full lg:h-[480px] mt-10 relative">
                <Image
                    className="w-full h-full object-cover"
                    alt={item.title}
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    layout="fill"
                />
            </div>
            <div className="flex flex-row mt-8 p-4 bg-white shadow-lg rounded-lg">
                    <Image
                        className="border-black border-4 rounded-lg lg:w-60 lg:h-80"
                        alt={item.title}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        width={240}
                        height={360}
                    />
                <div className="ml-8 mt-4 lg:mt-0">
                    <h1 className="text-3xl font-bold">{item.title}</h1>
                    <p className="mt-2 text-lg"><strong>Дата релізу:</strong> {item.release_date}</p>
                    <p className="mt-2 text-lg"><strong>Жанри:</strong></p>
                    <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
                        {item.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <p className="mt-2 text-lg "><strong>Бюджет:</strong> ${item.budget.toLocaleString()}</p>
                    <p className="mt-2 text-lg "><strong>Рейтинг на TMDB:</strong> {item.vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <div className="mt-8 p-4 lg:w-[560px] bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold">Опис</h2>
                <p className="mt-2 text-lg ">{item.overview}</p>
            </div>
        </div>
    );
};

export default ItemPage;