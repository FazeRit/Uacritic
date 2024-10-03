'use client';

import {memo, useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import useAuth from "@/hooks/useAuth";
import axios from 'axios';

import profileIcon from '@/assets/profileIcon.svg';
import NavbarGamburger from "@/ui/layout/Navbar/navbarGamburger/NavbarGamburger";
import NavBar from "@/ui/layout/Navbar/NavBar";
import Loading from '@/ui/data/status/Loading/Loading';
import mainLogo from '@/assets/logo/mainLogo.svg';

const MenuIcon = memo(function MenuIcon() {
    return (
        <svg
            className="sm:mt-[5vw] md:mt-[3vw] cursor-pointer transition transform active:scale-125"
            width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
});

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {authData, isLoading, error} = useAuth();

    const handleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const handleLogout = async () => {
        try {
            await axios.post('/api/user/logout', {}, {withCredentials: true});
            window.location.reload();
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    if (isLoading) {
        return <div><Loading/></div>;
    }

    return (
        <div>
            <header className="mx-[5.2vw]">
                <div className="flex justify-between">
                    <div className="flex">
                        <Image className="mt-3" alt="Logo of UaCritic" src={mainLogo}/>
                        <div className="sm:mt-5 md:mt-5 ml-5 roboto-black text-2xl mr-[10vw]">
                            <Link href="/" className="transition duration-300 hover:text-blue-700">UaCritic</Link>
                        </div>
                    </div>
                    <div className="sm:block lg:hidden" onClick={handleMenu}>
                        <MenuIcon/>
                    </div>
                    <div className="lg:flex items-center space-x-5 sm:hidden mt-5">
                        {authData?.loggedIn ? (
                            <>
                                <Image src={profileIcon} alt="Profile" className="inline-block w-6 h-6"/>
                                <Link href="/profile" className="transition duration-300 hover:text-blue-900">
                                    Profile
                                </Link>
                                <button onClick={handleLogout} className="transition duration-300 hover:text-blue-900">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/signup" className="transition duration-300 hover:text-blue-900">
                                    Sign up
                                </Link>
                                <Link href="/signin" className="transition duration-300 hover:text-blue-900">
                                    Sign in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <div className="mt-[1.5vw] border-b-4"></div>
            {showMenu && (
                <div className="absolute bg-gray-200 w-full pb-[2vw] z-10 lg:hidden">
                    <NavbarGamburger loggedIn={authData?.loggedIn || false}/>
                </div>
            )}
            <NavBar/>
        </div>
    );
};

export default Header;
