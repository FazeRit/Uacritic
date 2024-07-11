import { FC } from "react";
import NavBarItem from "./NavBarItem";

const navItems = [
    { path: "/movies", label: "Фільми" },
    { path: "/serials", label: "Серіали" },
    { path: "/music", label: "Музика" },
    { path: "/games", label: "Ігри" },
    { path: "/about", label: "Про нас" },
];

const NavBar: FC = () => {
    return (
        <nav className="mt-[1vw] mx-[7vw]">
            <ul className="sm:hidden lg:block w-[50vw] custom-ul">
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