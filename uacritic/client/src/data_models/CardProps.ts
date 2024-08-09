export interface CardProps{
    id: number,
    readonly category: 'movies' | 'serials' | 'music' | 'games',
    item: {
        /*value is unique for each category, for movies and serials it is episodes,
         for music it is performer, for games it is company that created it*/
        readonly value: any;
        rate: number;
        readonly title: string;
        liked: boolean;
        readonly imageUrl: string;
    }
}

export interface CardImgProps{
    readonly category: CardProps['category'];
    readonly title:string;
    value:string;
    readonly imageUrl:string;
}


export const chooseCategory = (category:CardProps["category"])=> {
    switch (category) {
        case 'movies':
        case 'serials':
            return 'Епізодів';
        case 'music':
            return 'Виконавець';
        case 'games':
            return 'Розробник';
        default:
            return 'Невідомо';
    }
}