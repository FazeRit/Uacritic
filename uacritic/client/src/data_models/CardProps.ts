export interface CardImgProps{
    readonly category: 'movies' | 'serials' | 'music' | 'games';
    readonly title: string;
    readonly value: number;
    readonly imageUrl: string;
}

export interface CardProps extends CardImgProps{
    readonly id: number,
    rate: number;
    liked: boolean;
}


export class Card implements CardProps{
    readonly id: number;
    readonly category: 'movies' | 'serials' | 'music' | 'games';
    readonly value: number;
    rate: number;
    readonly title: string;
    liked: boolean;
    readonly imageUrl: string;

    constructor(item: CardProps){
        this.id = item.id;
        this.category = item.category;
        this.value = item.value;
        this.rate = item.rate;
        this.title = item.title;
        this.liked = item.liked;
        this.imageUrl = item.imageUrl;
    }
}

export const chooseCategory = (category:CardProps["category"])=> {
    switch (category) {
        case 'movies':
        case 'serials':
            return 'Хронометраж';
        case 'music':
            return 'Виконавець';
        case 'games':
            return 'Розробник';
        default:
            return 'Невідомо';
    }
}