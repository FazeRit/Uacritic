'use client';

import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import GenresPicker from "@/ui/data/dataListing/FilterSearch/GenresPicker";
import MultiRangeSlider from "@/ui/data/dataListing/MultiRangeSlider/MultiRangeSlider";
import {Genre} from "@/lib/utils/Card/cardProps";

interface FilterSearchProps {
    title: string;
    genres: Genre[];
    genresError?: string;
    filter: {
        searchQuery: string;
        minYear: number;
        maxYear: number;
        genres: number[];
        minRating: number;
        maxRating: number;
    };
    setFilter: Dispatch<SetStateAction<{
        searchQuery: string;
        minYear: number;
        maxYear: number;
        genres: number[];
        minRating: number;
        maxRating: number;
    }>>;
}

const FilterSearch: FC<FilterSearchProps> = ({title, genres, genresError, filter, setFilter}) => {
    const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            searchQuery: e.target.value
        }));
    };

    const handleRangeChange = (type: 'year' | 'rating', minValue: number, maxValue: number) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            ...(type === 'year' ? {minYear: minValue, maxYear: maxValue} : {minRating: minValue, maxRating: maxValue})
        }));
    };

    const handleGenresChange = (selectedGenres: number[]) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            genres: selectedGenres
        }));
    };

    return (
        <form
            className="flex flex-col text-primaryText shadow-xl sm:mt-8 md:mt-6 lg:mt-10 sm:mx-auto h-fit lg:mx-[2vw] sm:w-[70%] md:w-[30vw] lg:w-72 rounded-xl roboto-medium relative">
            <div className="rounded-t-xl bg-primaryText sm:h-4 md:h-6"></div>
            <div className="flex flex-col flex-grow">
                <label htmlFor="searchBar" className="sm:text-2xl md:text-xl mx-auto md:mt-3">
                    Search
                </label>
                <div className="border-b-4 md:mx-[2vw] lg:mx-[1vw]"></div>
                <input
                    type="text"
                    id="searchBar"
                    value={filter.searchQuery}
                    onChange={handleSearchQueryChange}
                    className="sm:mx-[10vw] md:mx-[2vw] lg:mx-[1vw] sm:mt-5 md:mt-3 lg:mt-3 bg-white focus:outline focus:outline-primaryText rounded-3xl sm:text-base sm:h-6 md:h-7 sm:px-[4vw] md:px-[1vw]"
                    placeholder={`Search ${title}`}
                />
                <GenresPicker genres={genres} onGenresChange={handleGenresChange} genresError={genresError}/>
                <label
                    className="mx-auto border-t-4 sm:mx-[6vw] md:mx-[2vw] lg:mx-[1vw] sm:mt-3 sm:pt-3 md:text-base text-primaryText">
                    Year
                </label>
                <MultiRangeSlider
                    min={1960}
                    max={2024}
                    minVal={filter.minYear}
                    maxVal={filter.maxYear}
                    onRangeChange={(min, max) => handleRangeChange('year', min, max)}
                />
                <label
                    className="mx-auto border-t-4 w-[86%] lg:text-base sm:mt-6 sm:pt-3 md:mt-6 md:pt-3 text-primaryText"
                >
                    Rating
                </label>
                <MultiRangeSlider
                    min={1}
                    max={10}
                    minVal={filter.minRating}
                    maxVal={filter.maxRating}
                    onRangeChange={(min, max) => handleRangeChange('rating', min, max)}
                />
            </div>
            <div className="border-b-4 sm:pt-6 w-[86%] mx-auto"></div>
            <div
                className="bg-primaryText sm:h-4 md:h-6 rounded-b-xl w-full sm:mt-4 flex justify-center items-center"></div>
        </form>
    );
};

export default FilterSearch;