import { useCallback, useEffect, useState } from 'react';
import FilterSearch from '@/components/ui/FilterSearch/FilterSearch';
import SortBy from '@/components/ui/SortBy/SortBy';
import NextDataButton from '@/components/ui/NextDataButton/NextDataButton';
import DataView from '@/components/ui/DataView/DataView';
import { useSortedItems } from "@/hooks/useSortedItems";
import useRequest from "@/hooks/useRequest";
import { CardItem, Genre, sortCards } from '@/utils/CardProps';
import Loading from "@/components/ui/Loading/Loading";
import ErrorLoading from "@/components/ui/ErrorLoading/ErrorLoading";

interface ListDataProps<T> {
    url: string;
    genresUrl: string;
    token: string;
    params?: Record<string, any>;
    genresParams?: Record<string, any>;
    title: string;
    purpose: string;
    createMethod: (data: T) => CardItem[];
}

const ListData = <T,>({
                          url,
                          genresUrl,
                          token,
                          params,
                          genresParams,
                          title,
                          purpose,
                          createMethod,
                      }: ListDataProps<T>) => {
    const [items, setItems] = useState<CardItem[]>([]);
    const [isAscending, setIsAscending] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Рейтингом');
    const [filter, setFilter] = useState({
        searchQuery: '',
        minYear: 1960,
        genres: [] as number[],
        maxYear: 2024,
        minRating: 1,
        maxRating: 10
    });
    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: fetchedGenres,
        isLoading: genresLoading,
        error: genresError,
        fetchData: fetchGenres
    } = useRequest<Genre[]>({
        method: 'GET',
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
            setItems(prevItems => [...prevItems, ...createMethod(fetchedItems)]);
        }
    }, [fetchedItems, createMethod]);

    const handleSortSelection = useCallback((sort: string) => {
        const copyItems = [...items];
        const newAscendingState = (sort === selectedSort) ? !isAscending : true;

        sortCards(copyItems, sort, selectedSort, newAscendingState);

        setSelectedSort(sort);
        setIsAscending(newAscendingState);
        setItems(copyItems);
    }, [items, selectedSort, isAscending]);

    const sortedAndFilteredItems = useSortedItems({ items, filter });

    const handlePageChange = useCallback(() => {
        setCurrentPage(prevPage => prevPage + 1);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-grow flex-col md:flex-row">
                <div className="flex-grow">
                    {genresLoading ? (
                        <Loading />
                    ) : genresError ? (
                       <ErrorLoading />
                    ) : (
                        <FilterSearch
                            filter={filter}
                            setFilter={setFilter}
                            title={title}
                            // @ts-ignore
                            genres={fetchedGenres?.genres ?? []}
                        />
                    )}
                </div>

                <div className="flex flex-col flex-grow">
                    {itemsLoading ? (
                        <Loading />
                    ) : itemsError ? (
                        <ErrorLoading />
                    ) : (
                        <>
                            <div className="flex justify-end p-4">
                                <SortBy
                                    handleSortSelection={handleSortSelection}
                                    selectedSort={selectedSort}
                                    isAscending={isAscending}
                                />
                            </div>
                            <div className="flex-grow">
                                <DataView list={sortedAndFilteredItems} title={`Список ${purpose} ${title}`} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {(fetchedItems as any)?.total_pages > currentPage &&
                <NextDataButton onClick={handlePageChange} />}
        </div>
    );
};

export default ListData;