import {CardItem} from "@/lib/utils/Card/cardProps";
import {
    MovieAndSerialsListApiResponse,
    MovieDescription,
    MovieDescriptionProps
} from "@/lib/utils/Description/movieDescription";
import {SerialDescription, SerialDescriptionProps} from "@/lib/utils/Description/serialDescription";
import {GameApiResponse, GameDescription, GameResult} from "@/lib/utils/Description/gameDescipription";

export class CardFactory {
    static MovieCardCreate(items: MovieAndSerialsListApiResponse, category: 'movies' | 'serials' | 'games'): CardItem[] {
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

    static GameCardCreate(items: GameApiResponse): CardItem[] {
        return items.results
            .sort((a, b) => b.rating - a.rating)
            .map((item) => {
                return new CardItem({
                    genres: item.genres.map(genre => genre.id),
                    id: item.id,
                    category: "games",
                    description: item.description,
                    year: parseInt(item.released?.match(/^\d{4}/)?.[0] ?? '0', 10),
                    rate: item.rating * 2,
                    title: item.name,
                    imageUrl: item.background_image
                });
            });
    }

    static CardDescriptionCreate(item: GameResult): GameDescription {
        return new GameDescription({
            genres: item.genres,
            title: item.name,
            overview: item.description,
            release_date: item.released,
            vote_average: item.rating * 2,
            poster_path: item.background_image,
            backdrop_path: item.background_image,
            status: "Пасхалко"
        });
    }
}