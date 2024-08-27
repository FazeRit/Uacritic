import {FC, useState} from 'react';
import Image from 'next/image';
import {Genre} from '@/lib/utils/movieDescription';
import CommentsForm from "@/ui/comments/CommentsForm/CommentsForm";
import CommentsList from "@/ui/comments/CommentsForm/CommentsList";
import {DonutChart, DonutChartProps} from "@/ui/comments/DonutChart";

interface Comment {
    name: string;
    surname: string;
    rating: number;
    text: string;
}

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
    const initialData: DonutChartProps['chartData'] = [
        {rating: 10, count: 0},
        {rating: 9, count: 0},
        {rating: 8, count: 0},
        {rating: 7, count: 0},
        {rating: 6, count: 0},
        {rating: 5, count: 0},
        {rating: 4, count: 0},
        {rating: 3, count: 0},
        {rating: 2, count: 0},
        {rating: 1, count: 0}
    ];

    const [comments, setComments] = useState<Comment[]>([]);
    const [chartData, setChartData] = useState<DonutChartProps['chartData']>(initialData);

    const addComment = (comment: Comment) => {
        const updatedChartData = chartData.map((data) =>
            data.rating === comment.rating
                ? {...data, count: data.count + 1}
                : data
        );

        setChartData(updatedChartData);
        setComments([...comments, comment]);
    };

    return (
        <div className="w-full lg:mx-4 bg-bgMain p-4 roboto-medium text-primaryText">
            <div className="bg-primaryText hidden md:block lg:w-full lg:h-[560px] relative">
                <Image
                    className="w-full h-full object-cover"
                    alt={title}
                    src={backdrop_path}
                    width={1200}
                    height={500}
                />
            </div>

            <div className="flex flex-col md:flex-row mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-60 md:h-80">
                    <Image
                        className="border-4 border-black rounded-lg object-cover w-full h-full"
                        alt={title}
                        src={poster_path}
                        width={360}
                        height={360}
                    />
                </div>
                <div className="p-4 md:ml-8">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="mt-2 text-lg"><strong>Дата релізу:</strong> {release_date}</p>
                    <p className="mt-2 text-lg"><strong>Жанри:</strong></p>
                    <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    {isGame ? null : (
                        <p className="mt-2 text-lg">
                            <strong>{isSerial ? 'Кількість епізодів' : 'Бюджет'}:</strong>
                            {isSerial ? ` ${number_of_episodes}` : ` $${budget?.toLocaleString()}`}
                        </p>
                    )}
                    <p className="mt-2 text-lg"><strong>Рейтинг з інших джерел:</strong> {vote_average.toFixed(1)}/10
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between mt-8 gap-4">
                <div className="p-4 bg-white shadow-lg rounded-lg flex-1 lg:w-[480px]">
                    <h2 className="text-2xl font-semibold">Опис</h2>
                    <p className="mt-2 text-lg">{overview.replace(/(<([^>]+)>)/gi, '').replace(`&#39;`, "'") || "Опис відсутній"}</p>
                </div>
                <CommentsForm addComment={addComment}/>
            </div>

            <div className="mt-8 flex sm:flex-col lg:flex-row md:justify-between relative">
                <div>
                    <DonutChart chartData={chartData}/>
                </div>
                <CommentsList comments={comments}/>
            </div>
        </div>
    );
};

export default ItemDetail;
