import {CardItem} from "@/utils/CardProps";

interface Movie {
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
    liked?: boolean;
}

export interface MovieApiResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export class CardFactory {
    static movieCardCreate(items: MovieApiResponse): CardItem[] {
        return items.results
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((item) => {
                const date = item.first_air_date ?? item.release_date;
                const title = item.title ?? item.name;
                return new CardItem({
                    genres: item.genre_ids,
                    id: item.id,
                    category: "movies",
                    description: item.overview,
                    year: parseInt(date?.match(/^\d{4}/)?.[0] ?? '0', 10),
                    rate: item.vote_average,
                    title: title ?? "Unknown Title",
                    liked: item.liked ?? false,
                    imageUrl: `https://image.tmdb.org/t/p/original/${item.poster_path}`
                });
            });
    }
}