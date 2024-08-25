import {FC} from 'react';
import Image from 'next/image';
import { Genre } from '@/lib/utils/movieDescription';

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
    isGame: boolean;
}

const ItemDetail: FC<ItemDetailProps> = ({
                                                   title,
                                                   release_date,
                                                   genres,
                                                   poster_path,
                                                   backdrop_path,
                                                   vote_average,
                                                   overview,
                                                   number_of_episodes,
                                                   budget,
                                                   isSerial,
                                                   isGame
                                               }) => {
    return (
        <div className="w-full lg:mx-4 bg-bgMain p-4 roboto-medium text-primaryText">
            <div className="bg-primaryText lg:w-full lg:h-[560px] mt-10 relative">
                <Image
                    className="w-full h-full"
                    alt={title}
                    src={backdrop_path}
                    width={1200}
                    height={500}
                />
            </div>
            <div className="flex sm:flex-col md:flex-row mt-8 p-4 bg-white shadow-lg rounded-lg">
                <div className="flex md:flex-row justify-between">
                    <Image
                        className="border-black border-4 rounded-lg sm:w-full sm:h-[90vw] md:w-60 md:h-80"
                        alt={title}
                        src={poster_path}
                        width={360}
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
                    {isGame ?
                        ''
                        :
                        <>
                            {isSerial ? (
                                    <p className="mt-2 text-lg "><strong>Кількість епізодів:</strong> {number_of_episodes}</p>
                                ) : (
                                    <p className="mt-2 text-lg "><strong>Бюджет:</strong> ${budget!.toLocaleString()}</p>
                                )}
                        </>
                    }
                    <p className="mt-2 text-lg "><strong>Рейтинг з інщих джерел:</strong> {vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <div className="flex md:flex-row">
                <div className="mt-8 p-4 lg:w-[560px] bg-white shadow-lg rounded-lg md:max-w-[50vw]">
                    <h2 className="text-2xl font-semibold">Опис</h2>
                    <p className="mt-2 text-lg ">{overview.replace(/(<([^>]+)>)/gi, '').replace(`&#39;`, "'") || "Опис відстуній"}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;