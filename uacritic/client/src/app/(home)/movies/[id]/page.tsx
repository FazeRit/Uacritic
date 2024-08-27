'use client';

import {FC, useEffect, useState} from 'react';
import useRequest from "@/hooks/useRequest";
import {MovieDescription, MovieDescriptionProps} from "@/lib/utils/movieDescription";
import {CardFactory} from "@/lib/utils/cardFactory";
import ErrorFetching from "@/ui/dataView/ErrorFetching/ErrorFetching";
import Loading from "@/ui/dataView/Loading/Loading";
import ItemDetails from "@/ui/dataView/ItemDetails/ItemDetails";

const ItemPage: FC<{ params: { id: number } }> = ({params}) => {
    const [item, setItem] = useState<MovieDescription | null>(null);
    const [formData, setFormData] = useState<{ name: string, surname: string, rate: number, comment: string }>();

    const {data: fetchedItem, isLoading, error, fetchData} = useRequest<MovieDescriptionProps>({
        method: 'GET',
        withCredentials: false,
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
            isSerial={false}
            isGame={false}
        />
    );
};

export default ItemPage;