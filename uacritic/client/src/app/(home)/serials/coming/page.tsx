'use client';

import ListData from "@/components/ui/ListData/ListData";
import {CardFactory} from "@/utils/CardFactory";

const SerialList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_SERIALS_COMING_SOON_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_SERIALS_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{ language: "uk-UA" }}
            params={{ sort_by: "vote_average.desc", language: "uk-UA" }}
            title="серіалів"
            purpose=", що скоро вийдуте нового з"
            createMethod={CardFactory.movieCardCreate}
        />
    );
};

export default SerialList;
