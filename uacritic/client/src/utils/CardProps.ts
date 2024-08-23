export interface CardImgProps {
    readonly title: string;
    readonly imageUrl: string;
}

export interface Genre {
    name: string;
    id: number;
}

export class CardItem implements CardImgProps {
    readonly id: number
    rate: number;
    // liked: boolean;
    readonly year: number;
    readonly description: string;
    readonly genres: number[]
    readonly category: 'movies' | 'serials' | 'music' | 'games';
    readonly title: string;
    readonly imageUrl: string;

    constructor({genres, id, category, year, rate, title, /*liked, */ imageUrl, description}: CardItem) {
        this.genres = genres;
        this.id = id;
        this.description = description;
        this.category = category;
        this.year = year;
        this.rate = rate;
        this.title = title;
        // this.liked = liked;
        this.imageUrl = imageUrl;
    }
}

export const sortCards = (items: CardItem[], sort: string, selectedSort: string, isAscending: boolean) => {
    if (sort === "Рейтингом") {
        items.sort((a, b) => isAscending ? a.rate - b.rate : b.rate - a.rate);
    }
    if (sort === "Роком") {
        items.sort((a, b) => isAscending ? a.year - b.year : b.year - a.year);
    }
    if (sort === "Назвою") {
        items.sort((a, b) => isAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    }

    return sort === selectedSort ? !isAscending : true;
};

export class MovieDescription {
    genres: Genre[];
    budget: number;
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
                }:MovieDescription) {
        this.genres = genres;
        this.budget = budget;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.backdrop_path = backdrop_path;
        this.poster_path = poster_path;
        this.status = status;
    }
}
