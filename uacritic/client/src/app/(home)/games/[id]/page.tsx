'use client';

import {FC, useEffect, useState} from 'react';
import useRequest from "@/hooks/useRequest";
import {CardFactory} from "@/service/card.service";
import ErrorFetching from "@/ui/status/FetchingError/FetchingError";
import Loading from "@/ui/status/Loading/Loading";
import ItemDetails from "@/ui/content/ItemDetails/ItemDetails";
import {GameDescription, GameResult} from "@/lib/models/Description/gameDescipription";

const ItemPage: FC<{ params: { id: number } }> = ({params}) => {
    const [item, setItem] = useState<GameDescription | null>(null);

    const {data: fetchedItem, isLoading, error, fetchData} = useRequest<GameResult>({
        method: 'GET',
        withCredentials: false,
        url: `${process.env.NEXT_PUBLIC_GAMES_URL}/${params.id}`,
        token: "",
        params: {key: process.env.NEXT_PUBLIC_GAMES_API_TOKEN!}
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (fetchedItem) {
            setItem(CardFactory.CardDescriptionCreate(fetchedItem));
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
            category={"GAMES"}
            itemId={params.id}
        />
    );
};

export default ItemPage;