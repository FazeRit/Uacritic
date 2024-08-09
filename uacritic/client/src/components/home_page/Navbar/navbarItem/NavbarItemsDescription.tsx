import Link from 'next/link';
import { FC } from 'react';

interface NavbarItemsDescriptionProps {
    path: string;
}

const NavbarItemsDescription: FC<NavbarItemsDescriptionProps> = ({ path }) => {
    return (
        <div className="bg-white p-2 rounded-lg shadow-lg roboto-regular lg:text-[1vw] lg:text-md lg:[&_a]:mt-[0.4vw] flex flex-col md:w-[20vw] lg:w-[10vw]">
            <Link href={path + '/popular'} className="transition duration-300 hover:text-blue-700 mb-2">
                Популярне
            </Link>
            <Link href={path + '/coming'} className="transition duration-300 hover:text-blue-700">
                Скоро вийде
            </Link>
        </div>
    );
}

export default NavbarItemsDescription;