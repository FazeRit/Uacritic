import {FC, useState, useEffect, useCallback} from 'react';
import Image from 'next/image';

import {Genre} from '@/lib/models/Description/movieDescription';

import CommentsList from "@/ui/comments/CommentsForm/CommentsList";
import CommentsForm from '@/ui/comments/CommentsForm/CommentsForm';
import {DonutChart, DonutChartProps} from "@/ui/comments/DonutChart";

import useRequest from '@/hooks/useRequest';
import Loading from '@/ui/status/Loading/Loading';
import ErrorFetching from '@/ui/status/FetchingError/FetchingError';

interface Comment {
    username: string
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
    category: "GAMES" | "MOVIES" | "SERIALS";
    itemId: number;
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
                                             category,
                                             itemId
                                         }) => {
    const [comments, setComments] = useState<Comment[]>([]);   
    const [chartData, setChartData] = useState<DonutChartProps['chartData']>([]);

    const { data, isLoading, error, fetchData } = useRequest<Comment>({
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/comments/itemComments`,
        method: 'POST',
        token: '',
        body: { category, itemId: parseInt(itemId.toString()) },
        withCredentials: true,
    });
    
    const processComments = useCallback((commentsData: Comment[]) => {
        const newChartData = Array.from({ length: 11 }, (_, index) => ({ rating: index, count: 0 }));
    
        commentsData.forEach((comment) => {
            if (comment.rating >= 0 && comment.rating <= 10) {
                newChartData[comment.rating].count++;
            }
        });
    
        return newChartData;
    }, []);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        if (data) {
            setComments(Array.isArray(data) ? data : []);
            const chartData = processComments(Array.isArray(data) ? data : []);
            setChartData(chartData);
        }
    }, [data]);

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
                    <p className="mt-2 text-lg"><strong>Release date:</strong> {release_date}</p>
                    <p className="mt-2 text-lg"><strong>Genres:</strong></p>
                    <ul className="list-disc list-inside mt-2 text-lg text-gray-700">
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    {category === "GAMES" ? null : (
                        <p className="mt-2 text-lg">
                            <strong>{category === "SERIALS" ? 'Number of episodes' : 'Budget'}:</strong>
                            {category === "SERIALS" ? ` ${number_of_episodes}` : ` $${budget?.toLocaleString()}`}
                        </p>
                    )}
                    <p className="mt-2 text-lg"><strong>Rating from another source:</strong> {vote_average.toFixed(1)}/10
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between mt-8 gap-4">
                <div className="p-4 bg-white shadow-lg rounded-lg flex-1 lg:w-[480px]">
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="mt-2 text-lg">{overview.replace(/(<([^>]+)>)/gi, '').replace(`&#39;`, "'") || "No description"}</p>
                </div>
                <CommentsForm category={category} itemId={itemId} tags={genres}/>
            </div>

            <div className="mt-8 flex sm:flex-col lg:flex-row md:justify-between relative">
                {comments.length > 0 &&
                    <div>
                        <DonutChart chartData={chartData}/>
                    </div>
                }
                {isLoading && <Loading />}
                {error && <ErrorFetching />}
                {error || isLoading ?
                    ''
                    :                
                    <CommentsList comments={comments}/>
                }
            </div>
        </div>
    );
};

export default ItemDetail;
