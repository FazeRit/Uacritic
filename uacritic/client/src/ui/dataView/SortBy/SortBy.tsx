import {useState} from 'react';

const sortByList: string[] = ['Рейтингом', 'Роком', 'Назвою'];

interface SortByProps {
    handleSortSelection: (sort: string) => void;
    selectedSort: string;
    isAscending: boolean;
}

const SortBy = ({handleSortSelection, selectedSort, isAscending}: SortByProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="relative sm:mt-[2vw] md:mt-[3vw] lg:mt-[2vw] bg-gray-300 sm:w-[36vw] md:w-[24vw] lg:w-[14vw] z-40">
            <button
                type="button"
                onClick={toggleDropdown}
                className="sm:text-base rounded-3xl bg-gray-300 w-full items-center"
            >
                <p>Сортувати за</p>
            </button>
            {isOpen && (
                <ul className="flex flex-col items-center absolute">
                    {sortByList.map((sort) => (
                        <li key={sort} className="w-full">
                            <button
                                className="sm:text-xs md:text-[14px] cursor-pointer hover:bg-primaryText hover:text-white w-full text-left px-2 py-1"
                                onClick={() => handleSortSelection(sort)}
                            >
                                {sort} ({selectedSort === sort && isAscending ? '▲' : '▼'})
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortBy;