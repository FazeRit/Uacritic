import {CardItem} from "@/lib/utils/CardProps";
import {MovieDescription, MovieAndSerialsListApiResponse, MovieDescriptionProps} from "@/lib/utils/MovieDescription";
import {SerialDescription, SerialDescriptionProps} from "@/lib/utils/SerialDescription";

export class CardFactory {
    static MovieCardCreate(items: MovieAndSerialsListApiResponse, category: 'movies' | 'serials' | 'music' | 'games'): CardItem[] {
        return items.results
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((item) => {
                const date = item.first_air_date ?? item.release_date;
                const title = item.title ?? item.name;
                return new CardItem({
                    genres: item.genre_ids,
                    id: item.id,
                    category: category,
                    description: item.overview,
                    year: parseInt(date?.match(/^\d{4}/)?.[0] ?? '0', 10),
                    rate: item.vote_average,
                    title: title!,
                    imageUrl: `https://image.tmdb.org/t/p/original/${item.poster_path}`
                });
            });
    }

    static MovieDescriptionCreate(item: MovieDescriptionProps): MovieDescription {
        return new MovieDescription({
            genres: item.genres,
            budget: item.budget,
            title: item.title,
            overview: item.overview,
            release_date: item.release_date,
            vote_average: item.vote_average,
            poster_path: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
            backdrop_path: 'https://image.tmdb.org/t/p/original/' + item.backdrop_path,
            status: item.status
        });
    }

    static SerialDescriptionCreate(item: SerialDescriptionProps): SerialDescription {
        return new SerialDescription({
            genres: item.genres,
            title: item.name,
            overview: item.overview,
            release_date: item.first_air_date,
            vote_average: item.vote_average,
            poster_path: 'https://image.tmdb.org/t/p/original/' + item.poster_path,
            backdrop_path: 'https://image.tmdb.org/t/p/original/' + item.backdrop_path,
            status: item.status,
            number_of_episodes: item.number_of_episodes
        });
    }
}