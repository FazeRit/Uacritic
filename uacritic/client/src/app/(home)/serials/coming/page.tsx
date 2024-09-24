'use client';

import ListData from "@/ui/dataView/ListData/ListData";
import {CardFactory} from "@/lib/utils/Card/cardFactory";

const SerialList = () => {
    return (
        <ListData
            url={process.env.NEXT_PUBLIC_SERIALS_COMING_SOON_API_URL!}
            genresUrl={process.env.NEXT_PUBLIC_SERIALS_GENRES_API_URL!}
            token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
            genresParams={{}}
            params={{sort_by: "vote_average.desc"}}
            title="serials"
            withCredentials={false}
            purpose="Coming soon"
            createMethod={CardFactory.MovieCardCreate}
            category={'serials'}
        />
    );
};

export default SerialList;
