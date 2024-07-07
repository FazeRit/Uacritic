export default interface CardProps {
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