'use client'

import { useState} from "react";

const sortByList: string[] = ['Рейтингом',"Роком", "Назвою"]

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

    return  <div className="sm:mt-[2vw] md:mt-[3vw] lg:mt-[2vw] bg-gray-300 sm:w-[36vw] md:w-[24vw] lg:w-[14vw]">
        <button type="button" onClick={toggleDropdown} className="sm:text-base rounded-3xl bg-gray-300 w-full items-center">
            <p>Сортувати за</p>
        </button>
        {isOpen && (
            <ul className="flex flex-col items-center">
                {sortByList.map((sort) => (
                    <li key={sort} className="flex-row jus" onClick={() => handleCheckboxChange(sort)}>
                        <label className="sm:text-xs md:text-[14px] cursor-pointer hover:bg-primaryText hover:text-white w-full" htmlFor={sort}>{sort}</label>
                    </li>
                ))}
            </ul>
    )}
</div>
}

export default SortBy;