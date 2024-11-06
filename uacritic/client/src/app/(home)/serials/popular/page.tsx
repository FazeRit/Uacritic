'use client';

import ListData from "@/ui/content/ListData/ListData";
import {CardFactory} from "@/service/card.service";

const SerialList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_SERIALS_POPULAR_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_SERIALS_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{}}
            params={{sort_by: "vote_average.desc"}}
            title="serials"
            withCredentials={false}
            purpose="Popular"
            createMethod={CardFactory.MovieCardCreate}
            category={'SERIALS'}
        />
    );
};

export default SerialList;
