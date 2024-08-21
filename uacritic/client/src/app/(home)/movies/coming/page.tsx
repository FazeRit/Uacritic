'use client';

import ListData from "@/components/ui/ListData/ListData";
import {CardFactory} from "@/utils/CardFactory";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_MOVIE_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{ language: "uk-UA" }}
            params={{ sort_by: "vote_average.desc", language: "uk-UA" }}
            title="фільмів"
            purpose=", що скоро вийдуте нового з"
            createMethod={CardFactory.movieCardCreate}
        />
    );
};

export default MovieList;
