'use client';

import Image from 'next/image';
import CardContainer from '@/ui/layout/homePage/CardContainer/CardContainer';
import ComingSoonContainer from '@/ui/layout/homePage/ComingSoon/ComingSoonContainer';
import hedgehogHeader from '@/assets/hedgehogHeader.svg';
import {CardFactory} from '@/lib/utils/Card/cardFactory';

const HomePage = () => {
    return (
        <>
            <div className="sm:hidden md:block mt-[2vw] mx-[7vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw]">
                <Image className="w-full h-full" width={50} height={50} src={hedgehogHeader}
                       alt="We are working on this part of page"/>
            </div>
            <div className="mx-[7vw] mt-[5vw]">
                <CardContainer
                    params={{sort_by: "vote_average.desc"}}
                    title={"movies"}
                    linkToPopular={'/movies/popular'}
                    url={process.env.NEXT_PUBLIC_MOVIE_POPULAR_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    createMethod={CardFactory.MovieCardCreate}
                    category={"movies"}
                />
                <ComingSoonContainer
                    url={process.env.NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    params={{sort_by: "vote_average.desc"}}
                    createMethod={CardFactory.MovieCardCreate}
                    reverse={false}
                    category={"movies"}
                />
                <CardContainer
                    title={"serials"}
                    linkToPopular={'/serials/popular'}
                    params={{sort_by: "vote_average.desc"}}
                    url={process.env.NEXT_PUBLIC_SERIALS_POPULAR_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    createMethod={CardFactory.MovieCardCreate}
                    category={"serials"}
                />
                <ComingSoonContainer
                    url={process.env.NEXT_PUBLIC_SERIALS_COMING_SOON_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    params={{sort_by: "vote_average.desc"}}
                    createMethod={CardFactory.MovieCardCreate}
                    reverse={true}
                    category={"serials"}
                />
                <CardContainer
                    linkToPopular={'/games/top'}
                    url={process.env.NEXT_PUBLIC_GAMES_URL!}
                    token={""}
                    params={{
                        ordering: '-rating',
                        page_size: 4,
                        key: process.env.NEXT_PUBLIC_GAMES_API_TOKEN
                    }}
                    title="games"
                    createMethod={CardFactory.GameCardCreate}
                    category={'games'}
                />
            </div>
        </>
    );
};

export default HomePage;
