import Link from 'next/link';
import { FC, useState, useEffect, useRef } from "react";
import gsap from 'gsap';

import { NavbarProps } from '@/data_models/NavbarItems';
import NavbarItemsDescription from '@/ui/home_page/Navbar/navbarItem/NavbarItemsDescription';

const NavBarItem: FC<NavbarProps> = ({ path, children }) => {
    const [isShown, setIsShown] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isShown && descriptionRef.current) {
            gsap.fromTo(descriptionRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, [isShown]);

    return (
        <div className="relative flex flex-col"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            {path !== '/about' ? (
                <p
                    className="roboto-regular mx-auto cursor-pointer text-primaryText hover:text-black custom-hover-effect flex md:text-lg lg:text-2xl"
                    onClick={() => setIsShown((prev) => !prev)}
                >
                    <span className="hover-line"></span>
                    {children}
                </p>
            ) : (
                <Link href={path} className="roboto-regular mx-auto cursor-pointer text-primaryText hover:text-black custom-hover-effect flex md:text-lg lg:text-2xl">
                    <span className="hover-line"></span>
                    {children}
                </Link>
            )}
            {isShown && children !== '👥 Про нас' && (
                <div ref={descriptionRef} className="absolute top-full left-0 pt-3">
                    <NavbarItemsDescription path={path} />
                </div>
            )}
        </div>
    );
}

export default NavBarItem;