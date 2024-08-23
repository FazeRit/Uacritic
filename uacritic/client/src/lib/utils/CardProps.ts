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
    readonly year: number;
    readonly description: string;
    readonly genres: number[]
    readonly category: 'movies' | 'serials' | 'music' | 'games';
    readonly title: string;
    readonly imageUrl: string;

    constructor({genres, id, category, year, rate, title, imageUrl, description}: CardItem) {
        this.genres = genres;
        this.id = id;
        this.description = description;
        this.category = category;
        this.year = year;
        this.rate = rate;
        this.title = title;
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

