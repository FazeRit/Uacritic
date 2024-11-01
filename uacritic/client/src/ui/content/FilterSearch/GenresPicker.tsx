'use client';

import {FC, useState} from "react";
import {Genre} from "@/lib/models/Card/cardProps";

interface GenresPickerProps {
    genres: Genre[];
    genresError?: string;
    onGenresChange: (selectedGenres: number[]) => void;
}

const GenresPicker: FC<GenresPickerProps> = ({genres, genresError, onGenresChange}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const handleCheckboxChange = (genreId: number) => {
        const updatedGenres = selectedGenres.includes(genreId)
            ? selectedGenres.filter(g => g !== genreId)
            : [...selectedGenres, genreId];

        setSelectedGenres(updatedGenres);
        onGenresChange(updatedGenres);
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="sm:mt-3 md:mt-3 sm:mx-[6vw] md:mx-[2vw] lg:mx-[1vw] border-t-4 md:pt-3">
            <button
                type="button"
                onClick={toggleDropdown}
                className="sm:mt-3 md:mt-0 md:text-base w-full rounded-3xl bg-gray-300 flex items-center justify-center"
            >
                <p>Genre</p>
            </button>
            {genresError ? (
                <div className="sm:mt-2 text-red-500">{genresError}</div>
            ) : isOpen && (
                <div className="mt-3 flex flex-col max-h-[200px] overflow-auto">
                    {genres.map((genre) => (
                        <div key={genre.id} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={genre.name}
                                checked={selectedGenres.includes(genre.id)}
                                onChange={() => handleCheckboxChange(genre.id)}
                                className="mr-2"
                            />
                            <label htmlFor={genre.name}>{genre.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenresPicker;