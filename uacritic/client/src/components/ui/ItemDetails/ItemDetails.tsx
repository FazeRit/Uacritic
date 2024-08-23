import React from 'react';
import Image from 'next/image';
import { Genre } from '@/lib/utils/MovieDescription';

interface ItemDetailProps {
    title: string;
    release_date: string;
    genres: Genre[];
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    number_of_episodes?: number;
    budget?: number;
    isSerial: boolean;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
                                                   title,
                                                   release_date,
                                                   genres,
                                                   poster_path,
                                                   backdrop_path,
                                                   vote_average,
                                                   overview,
                                                   number_of_episodes,
                                                   budget,
                                                   isSerial
                                               }) => {
    return (
        <div className="w-full lg:mx-4 bg-bgMain p-4 roboto-medium text-primaryText">
            <div className="bg-primaryText lg:w-full lg:h-[560px] mt-10 relative">
                <Image
                    className="w-full h-full"
                    alt={title}
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    layout="fill"
                />
            </div>
            <div className="flex sm:flex-col md:flex-row mt-8 p-4 bg-white shadow-lg rounded-lg">
                <div className="flex md:flex-row justify-between">
                    <Image
                        className="border-black border-4 rounded-lg sm:w-full sm:h-[90vw] md:w-60 md:h-80"
                        alt={title}
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        width={240}
                        height={360}
                    />
                </div>
                <div className="ml-8 mt-4 lg:mt-0">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="mt-2 text-lg"><strong>Дата релізу:</strong> {release_date}</p>
                    <p className="mt-2 text-lg"><strong>Жанри:</strong></p>
                    <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    {isSerial ? (
                        <p className="mt-2 text-lg "><strong>Кількість епізодів:</strong> {number_of_episodes}</p>
                    ) : (
                        <p className="mt-2 text-lg "><strong>Бюджет:</strong> ${budget!.toLocaleString()}</p>
                    )}
                    <p className="mt-2 text-lg "><strong>Рейтинг на TMDB:</strong> {vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <div className="flex md:flex-row">
                <div className="mt-8 p-4 lg:w-[560px] bg-white shadow-lg rounded-lg md:max-w-[50vw]">
                    <h2 className="text-2xl font-semibold">Опис</h2>
                    <p className="mt-2 text-lg ">{overview || "Опис відстуній"}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;