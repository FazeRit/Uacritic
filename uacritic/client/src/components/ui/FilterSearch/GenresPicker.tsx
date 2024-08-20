'use client'

import {FC, useState} from "react";


const GenresPicker:FC<{genres:string[]}> = ({genres}) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const handleCheckboxChange = (genre: string) => {
        setSelectedGenres(prevSelected =>
            prevSelected.includes(genre)
                ? prevSelected.filter(g => g !== genre)
                : [...prevSelected, genre]
        );
    };


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return <div className="sm:mt-3 md:mt-3 sm:mx-[6vw] md:mx-[2vw] lg:mx-[1vw] border-t-4 md:pt-3">
            <button type="button" onClick={toggleDropdown} className="sm:mt-3 md:mt-0 md:text-base w-full rounded-3xl bg-gray-300 items-center">
                <p>Жанр</p>
            </button>
            {isOpen && (
                <div className="">
                    {genres.map((genre) => (
                        <div className="" key={genre}>
                            <input
                                type="checkbox"
                                id={genre}
                                checked={selectedGenres.includes(genre)}
                                onChange={() => handleCheckboxChange(genre)}
                            />
                            <label className="sm:ml-2" htmlFor={genre}>{genre}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
}

export default GenresPicker;