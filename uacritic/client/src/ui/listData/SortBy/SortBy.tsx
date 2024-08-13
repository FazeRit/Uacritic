'use client'

import { useState} from "react";

const sortByList: string[] = ['Рейтингом', "Роком", "Назвою"]

const SortBy = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedSort, setSelectedSort] = useState<string[]>([]);

    const handleCheckboxChange = (sort: string) => {
        setSelectedSort(prevSelected =>
            prevSelected.includes(sort)
                ? prevSelected.filter(g => g !== sort)
                : [...prevSelected, sort]
        );
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return  <div className="sm:mt-5 sm:mx-[6vw] md:mx-[1vw]">
        <button type="button" onClick={toggleDropdown} className="sm:text-md rounded-3xl bg-gray-300 w-full items-center">
            <p>Сортувати за</p>
        </button>
        {isOpen && (
        <div className="">
            {sortByList.map((sort) => (
                <div className="" key={sort}>
                    <input
                        type="checkbox"
                        id={sort}
                        checked={selectedSort.includes(sort)}
                        onChange={() => handleCheckboxChange(sort)}
                    />
                    <label className="sm:ml-2" htmlFor={sort}>{sort}</label>
                </div>
            ))}
        </div>
    )}
</div>
}

export default SortBy;