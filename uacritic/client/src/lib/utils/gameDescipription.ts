import {Genre} from "@/lib/utils/cardProps";
import {MovieDescription} from "@/lib/utils/movieDescription";

interface EsrbRating {
    id: number;
    slug: string;
    name: string;
}

interface PlatformDetails {
    id: number;
    slug: string;
    name: string;
}

interface Platform {
    platform: PlatformDetails;
    released_at: string;
    requirements: {
        minimum: string;
        recommended: string;
    };
}

export interface GameResult {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Record<string, any>;
    ratings_count: number;
    genres: Genre[];
    description: string;
    reviews_text_count: string;
    added: number;
    added_by_status: Record<string, any>;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: EsrbRating;
    platforms: Platform[];
}

export interface GameApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: GameResult[];
}

export class GameDescription extends MovieDescription {

    constructor({
                    genres,
                    title,
                    overview,
                    release_date,
                    vote_average,
                    poster_path,
                    backdrop_path,
                    status
                }: {
        genres: Genre[];
        title: string;
        overview: string;
        release_date: string;
        vote_average: number;
        poster_path: string;
        backdrop_path: string;
        status: string;
    }) {
        super({
            genres,
            title,
            overview,
            release_date,
            vote_average,
            poster_path,
            backdrop_path,
            status
        });
    }
}
