import {Genre} from "@/lib/models/Card/cardProps";

export interface GenresMovieAndSerialsProps {
    genres: Genre[]
}

export interface GenresGamesProps {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}

interface Result {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export const normalizeGenres = (data: GenresMovieAndSerialsProps | GenresGamesProps): Genre[] => {
    if ('genres' in data) {
        return data.genres.map(genre => ({
            id: genre.id,
            name: genre.name
        }));
    } else {
        return data.results.map(genre => ({
            id: genre.id,
            name: genre.name
        }));
    }
};
