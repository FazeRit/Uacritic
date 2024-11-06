'use client';

import {FC, useEffect, useState} from 'react';
import useRequest from "@/hooks/useRequest";
import {MovieDescription, MovieDescriptionProps} from "@/lib/models/Description/movieDescription";
import {CardFactory} from "@/service/card.service";
import ErrorFetching from "@/ui/status/FetchingError/FetchingError";
import Loading from "@/ui/status/Loading/Loading";
import ItemDetails from "@/ui/content/ItemDetails/ItemDetails";

const ItemPage: FC<{ params: { id: number } }> = ({params}) => {
    const [item, setItem] = useState<MovieDescription | null>(null);

    const {data: fetchedItem, isLoading, error, fetchData} = useRequest<MovieDescriptionProps>({
        method: 'GET',
        withCredentials: false,
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        token: process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!,
        params: {}
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
            <Loading/>
        );
    }

    if (error || !item) {
        return (
            <ErrorFetching/>
        );
    }

    return (
        <ItemDetails
            title={item.title}
            backdrop_path={item.backdrop_path}
            poster_path={item.poster_path}
            release_date={item.release_date}
            genres={item.genres}
            vote_average={item.vote_average}
            overview={item.overview}
            budget={item.budget}
            itemId={params.id}
            category={'MOVIES'}
        />
    );
};

export default ItemPage;