'use client';

import ListData from "@/ui/dataView/ListData/ListData";
import {CardFactory} from "@/lib/utils/cardFactory";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_SERIALS_TOPRATED_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_SERIALS_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{language: "uk-UA"}}
            params={{sort_by: "vote_average.desc", language: "uk-UA"}}
            title="фільмів"
            purpose="найбільш популярних"
            createMethod={CardFactory.MovieCardCreate}
            category={'serials'}
            withCredentials={false}
        />
    );
};

export default MovieList;
