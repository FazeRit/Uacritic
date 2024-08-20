'use client';

import { useState, memo } from "react";
import Image from 'next/image';
import Link from 'next/link';
import NavbarGamburger from "@/components/home_page/Navbar/navbarGamburger/NavbarGamburger";
import NavBar from "@/components/home_page/Navbar/NavBar";
import mainLogo from '@/assets/logo/mainLogo.svg';

const MenuIcon = memo(() => (
    <svg
        className="sm:mt-[5vw] md:mt-[3vw] cursor-pointer transition transform active:scale-125"
        width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
    </svg>
));

const HeartIcon = memo(() => (
    <svg className="ml-5 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_9_107)">
            <path
                d="M22.0615 3.409C20.8047 2.15227 19.141 1.4654 17.3653 1.4654C15.5896 1.4654 13.9207 2.15736 12.664 3.41409L12.0076 4.07044L11.3411 3.40391C10.0844 2.14719 8.41044 1.45013 6.63474 1.45013C4.86413 1.45013 3.19527 2.1421 1.94363 3.39374C0.686904 4.65047 -0.00506011 6.31932 2.78603e-05 8.09502C2.78603e-05 9.87072 0.697079 11.5345 1.95381 12.7912L11.509 22.3464C11.6413 22.4787 11.8194 22.5499 11.9924 22.5499C12.1654 22.5499 12.3434 22.4838 12.4757 22.3515L22.0513 12.8116C23.308 11.5548 24 9.88599 24 8.11028C24.0051 6.33458 23.3182 4.66573 22.0615 3.409ZM21.0846 11.8398L11.9924 20.8963L2.92052 11.8245C1.92328 10.8273 1.37378 9.50439 1.37378 8.09502C1.37378 6.68565 1.91819 5.36278 2.91543 4.37063C3.90759 3.37847 5.23046 2.82897 6.63474 2.82897C8.04411 2.82897 9.37207 3.37847 10.3693 4.37572L11.5192 5.5256C11.7889 5.79526 12.2213 5.79526 12.491 5.5256L13.6307 4.38589C14.6279 3.38865 15.9559 2.83915 17.3602 2.83915C18.7645 2.83915 20.0873 3.38865 21.0846 4.3808C22.0818 5.37805 22.6262 6.70092 22.6262 8.11028C22.6313 9.51965 22.0818 10.8425 21.0846 11.8398Z"
                fill="#364F6B"/>
        </g>
        <defs>
            <clipPath id="clip0_9_107">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
));

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    return (
        <div>
            <header className="mx-[5.2vw]">
                <div className="flex justify-between">
                    <div className="flex">
                        <Image className="my-[0.4vw]" alt="Logo of UaCritic" src={mainLogo}/>
                        <div className="sm:mt-[3vw] md:mt-5 ml-5 roboto-black text-2xl mr-[10vw]">
                            <Link href="/" className="transition duration-300 hover:text-blue-700">UaCritic</Link>
                        </div>
                        <div className="mt-5 h-8 w-[26vw] lg:flex bg-inputHeader sm:hidden">
                            <input
                                className="outline-none w-[16vw] placeholder-primaryText p-1 roboto-regular text-sm"
                                type="text"
                                placeholder="Введіть ключові слова"/>
                        </div>
                    </div>
                    <div className="sm:block lg:hidden" onClick={handleMenu}>
                        <MenuIcon/>
                    </div>
                    <div className="lg:flex items-center space-x-5 sm:hidden">
                        <Link href="/signup"
                              className="transition duration-300 hover:text-blue-900">Зареєструватися</Link>
                        <Link href="/signin"
                              className="transition duration-300 hover:text-blue-900">Авторизуватися</Link>
                        <HeartIcon/>
                    </div>
                </div>
            </header>
            <div className="mt-[1.5vw] border-b-4"></div>
            <div>
                {showMenu && (
                    <div className="bg-gray-200 w-full pb-[2vw] lg:hidden">
                        <NavbarGamburger/>
                    </div>
                )}
                <NavBar/>
            </div>
        </div>
    );
};

export default memo(Header);