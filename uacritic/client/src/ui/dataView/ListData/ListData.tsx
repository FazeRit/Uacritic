import {useCallback, useEffect, useState} from 'react';
import FilterSearch from '@/ui/dataView/FilterSearch/FilterSearch';
import SortBy from '@/ui/dataView/SortBy/SortBy';
import NextPageButton from '@/ui/dataView/NextPageData/NextPageButton';
import DataView from '@/ui/dataView/DataView/DataView';
import Loading from "@/ui/dataView/Loading/Loading";
import ErrorFetching from "@/ui/dataView/ErrorFetching/ErrorFetching";

import useRequest from "@/hooks/useRequest";
import useDebounce from "@/hooks/useDebounce"; // Import the debounce hook
import {CardItem, sortCards} from '@/lib/utils/Card/cardProps';
import {filterItems} from '@/lib/utils/filterItems';
import {GenresGamesProps, GenresMovieAndSerialsProps, normalizeGenres} from "@/lib/utils/Card/genresProps";

interface ListDataProps<T> {
    url: string;
    genresUrl: string;
    token: string;
    category: 'movies' | 'serials' | 'games';
    params?: Record<string, any>;
    genresParams?: Record<string, any>;
    title: string;
    purpose: string;
    withCredentials: boolean;
    createMethod: (data: T, category: 'movies' | 'serials' | 'games') => CardItem[];
}

const ListData = <T, >({
                           url,
                           genresUrl,
                           token,
                           params,
                           genresParams,
                           title,
                           purpose,
                           category,
                           withCredentials,
                           createMethod,
                       }: ListDataProps<T>) => {
    const [items, setItems] = useState<CardItem[]>([]);
    const [isAscending, setIsAscending] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Rating');
    const [filter, setFilter] = useState({
        searchQuery: '',
        minYear: 1960,
        genres: [] as number[],
        maxYear: 2024,
        minRating: 1,
        maxRating: 10
    });
    const [currentPage, setCurrentPage] = useState(1);

    const debouncedFilter = useDebounce(filter, 300);

    const {
        data: fetchedGenres,
        isLoading: genresLoading,
        error: genresError,
        fetchData: fetchGenres
    } = useRequest<GenresMovieAndSerialsProps | GenresGamesProps>({
        method: 'GET',
        withCredentials,
        url: genresUrl,
        token,
        params: genresParams
    });

    const {
        data: fetchedItems,
        isLoading: itemsLoading,
        error: itemsError,
        fetchData: fetchItems
    } = useRequest<T>({
        method: 'GET',
        url,
        token,
        withCredentials,
        params: {
            ...params,
            page: currentPage
        }
    });

    useEffect(() => {
        fetchGenres();
    }, []);

    useEffect(() => {
        fetchItems();
    }, [currentPage]);

    useEffect(() => {
        if (fetchedItems) {
            const newItems = createMethod(fetchedItems, category).filter(item =>
                !items.some(existingItem => existingItem.id === item.id)
            );
            setItems(prevItems => [...prevItems, ...newItems]);
        }
    }, [fetchedItems]);

    const handleSortSelection = useCallback((sort: string) => {
        const copyItems = [...items];
        const newAscendingState = (sort === selectedSort) ? !isAscending : true;

        sortCards(copyItems, sort, selectedSort, newAscendingState);

        setSelectedSort(sort);
        setIsAscending(newAscendingState);
        setItems(copyItems);
    }, [items, selectedSort, isAscending]);

    const handlePageChange = useCallback(() => {
        setCurrentPage(prevPage => prevPage + 1);
    }, []);

    return (
        <div className="flex flex-col min-h-[60vw]">
            <div className="flex flex-grow flex-col md:flex-row">
                {genresLoading ? (
                    <Loading/>
                ) : genresError ? (
                    <ErrorFetching/>
                ) : (
                    <FilterSearch
                        filter={filter}
                        setFilter={setFilter}
                        title={title}
                        genres={fetchedGenres ? normalizeGenres(fetchedGenres) : []}
                    />
                )}
                <div className="flex flex-col flex-grow sm:w-full md:w-[65vw] lg:w-[70vw]">
                    {itemsLoading ? (
                        <Loading/>
                    ) : itemsError ? (
                        <ErrorFetching/>
                    ) : (
                        <>
                            <div className="flex justify-end sm:p-6 md:p-0">
                                <SortBy
                                    handleSortSelection={handleSortSelection}
                                    selectedSort={selectedSort}
                                    isAscending={isAscending}
                                />
                            </div>
                            <div className="flex-grow">
                                <DataView list={filterItems(items, debouncedFilter)}
                                          title={`${purpose} ${title}`}/>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {!itemsError && !genresError &&
                <NextPageButton onClick={handlePageChange}/>}
        </div>
    );
};

export default ListData;
