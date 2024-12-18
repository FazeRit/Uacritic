'use client';

import ListData from "@/ui/content/ListData/ListData";
import {CardFactory} from "@/service/card.service";

const MovieList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_GAMES_URL!}
            genresUrl={process.env.NEXT_PUBLIC_GAMES_GENRES_URL!}
            token={""}
            withCredentials={false}
            genresParams={{language: `uk`, key: process.env.NEXT_PUBLIC_GAMES_API_TOKEN}}
            params={{ordering: '-rating', page_size: 20, key: process.env.NEXT_PUBLIC_GAMES_API_TOKEN}}
            title="games"
            purpose="Top rated"
            createMethod={CardFactory.GameCardCreate}
            category={'GAMES'}
        />
    );
};

export default MovieList;
