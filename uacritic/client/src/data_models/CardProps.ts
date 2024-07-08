export type CardProps =  {
    id: number,
    category:string,
    item: {
        /*value is unique for each category, for movies and serials it is episodes,
         for music it is performer, for games it is company that created it*/
        value: any;
        rate: number;
        title: string;
        liked: boolean;
        imageUrl: string;
    }
}

export const chooseCategory = (category:CardProps["category"])=> {
    switch (category) {
        case 'movies':
        case 'serials':
            return 'Епізодів';
        case 'music':
            return 'Виконавець';
        case 'games':
            return 'Компанія розробник';
        default:
            return 'Невідомо';
    }
}