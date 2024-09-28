'use client';

import ListData from "@/ui/data/dataListing/ListData/ListData";
import {CardFactory} from "@/lib/utils/Card/cardFactory";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_MOVIE_POPULAR_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_MOVIE_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{}}
            params={{sort_by: "vote_average.desc"}}
            title="movies"
            withCredentials={false}
            purpose="Popular"
            createMethod={CardFactory.MovieCardCreate}
            category={'movies'}
        />
    );
};

export default MovieList;
