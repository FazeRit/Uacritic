import { MovieDescription } from "@/lib/utils/MovieDescription";
import {Genre} from "@/lib/utils/CardProps";

export interface SerialDescriptionProps {
    adult: boolean;
    backdrop_path: string;
    created_by: Array<Creator>;
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Episode;
    name: string;
    next_episode_to_air: Episode | null;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<ProductionCompany>;
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: Language[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

interface Creator {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
}

interface Episode {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
}

interface Network {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
}

interface Language {
    english_name: string;
    iso_639_1: string;
    name: string;
}


export class SerialDescription extends MovieDescription {
    number_of_episodes: number;

    constructor({
                    genres,
                    budget,
                    title,
                    overview,
                    release_date,
                    vote_average,
                    poster_path,
                    backdrop_path,
                    status,
                    number_of_episodes
                }: {
        genres: Genre[];
        budget?: number;
        title: string;
        overview: string;
        release_date: string;
        vote_average: number;
        poster_path: string;
        backdrop_path: string;
        status: string;
        number_of_episodes: number;
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
        this.number_of_episodes = number_of_episodes;
    }
}
