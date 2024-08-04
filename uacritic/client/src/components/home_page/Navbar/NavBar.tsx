import {  } from "react";
import NavBarItem from "./NavBarItem";
import {navItems} from '@/data_models/NavbarItems'

const NavBar= () => {
    return (
        <nav className="mt-[1vw] mx-[7vw]">
            <ul className="sm:hidden lg:block w-[70vw] custom-ul flex flex-row">
                {navItems.map((item) => (
                        <NavBarItem key={item.path} path={item.path}>
                            {item.label}
                        </NavBarItem>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;