import {navItems} from '@/lib/utils/navBarItems'
import Link from 'next/link';
import NavBarGamburgerItem from "@/ui/layout/Navbar/navbarGamburger/NavBarGamburgerItem";


const NavbarGamburger = () => {
    return <div>
        <div className="border-black border-b-2 sm:mx-[10vw] md:mx-[20vw] flex justify-center">
            <div className="flex justify-between sm:w-[66vw] md:w-[40vw] sm:mt-[4vw] md:mt-[2vw]">
                <Link href='/signup'><span
                    className="hover:border-r-2 hover:border-l-2 border-black pl-[1vw] pr-[1vw]">Зареєструватися</span></Link>
                <Link href='/signin'><span
                    className="hover:border-r-2 hover:border-l-2 border-black pl-[1vw] pr-[1vw]">Авторизуватися</span></Link>
            </div>
        </div>
        <div>
            <ul className="grid grid-cols-1 mt-[2vw] sm:mx-[10vw] md:mx-[20vw]">
                {navItems.map((item, index) => {
                    return <li key={index} className="sm:w-[24vw] md:w-[12vw] mx-auto">
                        <NavBarGamburgerItem
                            path={item.path}>{item.label}
                        </NavBarGamburgerItem>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default NavbarGamburger;