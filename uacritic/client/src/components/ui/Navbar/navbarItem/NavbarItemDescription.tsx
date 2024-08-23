import Link from 'next/link';
import {FC} from 'react';

interface NavbarItemDescriptionProps {
    path: string;
}

const NavbarItemDescription: FC<NavbarItemDescriptionProps> = ({path}) => {
    return (
        <div
            className="bg-white lg:p-2 sm:px-1 sm:w-[24vw] sm:mb-[4vw] md:mb-0 sm:p-0 rounded-lg shadow-lg roboto-regular lg:text-[16px] lg:[&_a]:mt-[0.4vw] flex flex-col md:w-[14vw] lg:w-[10vw]">
            <Link href={path + '/popular'} className="transition duration-300 hover:text-blue-700 mb-2">
                Популярне
            </Link>
            <Link href={path + '/coming'} className="transition duration-300 hover:text-blue-700">
                Скоро вийде
            </Link>
            <Link href={path + '/top'} className="transition duration-300 hover:text-blue-700">
                Найбільш популярні
            </Link>
        </div>
    );
}

export default NavbarItemDescription;