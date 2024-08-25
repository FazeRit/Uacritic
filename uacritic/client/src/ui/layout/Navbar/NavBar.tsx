import NavBarItem from "./navbarItem/NavBarItem";
import {navItems} from "@/lib/utils/navBarItems";

const NavBar = () => {
    return (
        <nav className="mt-[1vw] mx-[7vw]">
            <ul className="sm:hidden lg:flex w-full custom-ul flex-row">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavBarItem path={item.path}>
                            {item.label}
                        </NavBarItem>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;