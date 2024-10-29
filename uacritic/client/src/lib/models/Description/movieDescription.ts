export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
    title?: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieAndSerialsListApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieDescriptionProps {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | Collection;
    budget?: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export class MovieDescription {
    genres: Genre[];
    budget?: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
    status: string;

    constructor({
                    genres,
                    budget,
                    title,
                    overview,
                    release_date,
                    vote_average,
                    poster_path,
                    backdrop_path,
                    status
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
    }) {
        this.genres = genres;
        this.budget = budget!;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.backdrop_path = backdrop_path;
        this.poster_path = poster_path;
        this.status = status;
    }
}