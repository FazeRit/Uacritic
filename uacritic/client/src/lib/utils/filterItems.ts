import {CardItem} from "@/lib/models/Card/cardProps";

interface Filter {
    searchQuery: string;
    minYear: number;
    maxYear: number;
    minRating: number;
    maxRating: number;
    genres: number[];
}

export const filterItems = (items: CardItem[], filter: Filter) => {
    return items.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(filter.searchQuery.toLowerCase());
        const matchesYear = item.year >= filter.minYear && item.year <= filter.maxYear;
        const matchesRating = item.rate >= filter.minRating && item.rate <= filter.maxRating;
        const matchesGenres = filter.genres.length === 0 || filter.genres.every(genre => item.genres.includes(genre));

        return matchesQuery && matchesYear && matchesRating && matchesGenres;
    });
};