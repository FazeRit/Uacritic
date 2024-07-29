import { FC } from "react";

import {navItems} from '@/data_models/NavbarItems'
import NavBarGamburgerItem from "@/components/home_page/Navbar/NavBarGamburgerItem";

const NavbarGamburger:FC = () =>{
    return <div>
        <div className="grid grid-cols-2 border-black border-b-2 sm:mx-[10vw] md:mx-[20vw] pb-[1vw]">
            <NavBarGamburgerItem path='/signup'><span className="hover:border-r-2 hover:border-l-2 border-black pl-[1vw] pr-[1vw]">Зареєструватися</span></NavBarGamburgerItem>
            <NavBarGamburgerItem path='/signin'><span className="hover:border-r-2 hover:border-l-2 border-black pl-[1vw] pr-[1vw]">Авторизуватися</span></NavBarGamburgerItem>
        </div>
        <ul className="grid grid-cols-1 mt-[2vw] sm:mx-[10vw] md:mx-[20vw]">
            {navItems.map((item, index) =>{
                return <li key={index}><NavBarGamburgerItem path={item.path}>{item.label}</NavBarGamburgerItem></li>
            })}
        </ul>
    </div>
}

export default NavbarGamburger;