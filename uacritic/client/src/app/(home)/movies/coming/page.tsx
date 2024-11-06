'use client';

import ListData from "@/ui/content/ListData/ListData";
import {CardFactory} from "@/service/card.service";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_MOVIE_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{}}
            params={{sort_by: "vote_average.desc"}}
            title="movies"
            withCredentials={false}
            purpose="Coming soon"
            createMethod={CardFactory.MovieCardCreate}
            category={'MOVIES'}
        />
    );
};

export default MovieList;
