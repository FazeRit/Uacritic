'use client';

import Image from 'next/image';
import CardContainer from '@/components/home_page/CardContainer/CardContainer';
import ComingSoonContainer from '@/components/home_page/ComingSoon/ComingSoonContainer';
import hedgehogHeader from '@/assets/hedgehogHeader.svg';
import {CardFactory} from '@/utils/CardFactory';

const HomePage = () => {
    return (
        <>
            <div className="sm:hidden md:block mt-[2vw] mx-[7vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw]">
                <Image className="w-full h-full" width={50} height={50} src={hedgehogHeader}
                       alt="We are working on this part of page"/>
            </div>
            <div className="mx-[7vw] mt-[5vw]">
                <CardContainer
                    params={{sort_by: "vote_average.desc", language: "uk-UA"}}
                    title={"фільми"}
                    linkToPopular={'/movies/popular'}
                    url={process.env.NEXT_PUBLIC_MOVIE_POPULAR_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    createMethod={CardFactory.MovieCardCreate}
                />
                <ComingSoonContainer
                    url={process.env.NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    params={{sort_by: "vote_average.desc", language: "uk-UA"}}
                    createMethod={CardFactory.MovieCardCreate}
                    reverse={false}/>
                <CardContainer
                    title={"серіали"}
                    linkToPopular={'/serials/popular'}
                    params={{sort_by: "vote_average.desc", language: "uk-UA"}}
                    url={process.env.NEXT_PUBLIC_SERIALS_POPULAR_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    createMethod={CardFactory.MovieCardCreate}
                />
                <ComingSoonContainer
                    url={process.env.NEXT_PUBLIC_SERIALS_COMING_SOON_API_URL!}
                    token={process.env.NEXT_PUBLIC_MOVIE_API_TOKEN!}
                    params={{sort_by: "vote_average.desc", language: "uk-UA"}}
                    createMethod={CardFactory.MovieCardCreate}
                    reverse={true}/>
                {/*<CardContainer title={"ігри"} linkToPopular={'/games/popular'}/>*/}
            </div>
        </>
    );
};

export default HomePage;
