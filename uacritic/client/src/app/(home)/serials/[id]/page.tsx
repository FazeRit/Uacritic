'use client';

import {FC, useEffect, useState} from 'react';

import useRequest from "@/hooks/useRequest";
import {CardFactory} from "@/service/card.service";
import ErrorFetching from "@/ui/status/FetchingError/FetchingError";
import Loading from "@/ui/status/Loading/Loading";

import {SerialDescription, SerialDescriptionProps} from "@/lib/models/Description/serialDescription";
import ItemDetails from "@/ui/content/ItemDetails/ItemDetails";

const ItemPage: FC<{ params: { id: number } }> = ({params}) => {
    const [item, setItem] = useState<SerialDescription>();

    const {data: fetchedItem, isLoading, error, fetchData} = useRequest<SerialDescriptionProps>({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${params.id}`,
        token: process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!,
        withCredentials: false,
        params: {}
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (fetchedItem) {
            setItem(CardFactory.SerialDescriptionCreate(fetchedItem));
        }
    }, [fetchedItem]);

    if (isLoading) {
        return <Loading/>;
    }

    if (error || !item) {
        return <ErrorFetching/>;
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
            number_of_episodes={item.number_of_episodes}
            category={"SERIALS"}
            itemId={params.id}
        />
    );
};

export default ItemPage;