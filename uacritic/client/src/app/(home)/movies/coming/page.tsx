'use client';

import ListData from "@/ui/dataView/ListData/ListData";
import {CardFactory} from "@/lib/utils/cardFactory";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_MOVIE_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{language: "uk-UA"}}
            params={{sort_by: "vote_average.desc", language: "uk-UA"}}
            title="фільмів"
            withCredentials={false}
            purpose=", що скоро вийде нового з"
            createMethod={CardFactory.MovieCardCreate}
            category={'movies'}
        />
    );
};

export default MovieList;
