import {CardItem} from "@/lib/utils/CardProps";

interface useSortedItemsProps {
    items: CardItem[];
    filter: {
        searchQuery: string;
        minYear: number;
        maxYear: number;
        minRating: number;
        maxRating: number;
        genres: number[];
    }
}

export const useSortedItems = ({items, filter}: { items: CardItem[], filter: useSortedItemsProps["filter"] }) => {
    return items.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(filter.searchQuery.toLowerCase());
        const matchesYear = item.year >= filter.minYear && item.year <= filter.maxYear;
        const matchesRating = item.rate >= filter.minRating && item.rate <= filter.maxRating;
        const matchesGenres = filter.genres.every(genre => item.genres.includes(genre));

        return matchesQuery && matchesYear && matchesRating && matchesGenres;
    });
};