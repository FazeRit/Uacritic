import {FC} from "react";
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
        <nav className="mt-2 mx-[7rem]" >
            <ul className="w-[35rem] custom-ul ">
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