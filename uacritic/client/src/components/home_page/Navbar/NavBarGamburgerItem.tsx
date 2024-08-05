import Link from 'next/link'
import  {FC} from "react";

import {NavbarProps} from '@/data_models/NavbarItems';

const NavBarGamburgerItem: FC<NavbarProps> = ({path, children}) => {
    return <Link href={path} className="roboto-regular mx-auto cursor-pointer text-primaryText hover:text-black custom-hover-effect"> <span className="hover-line"></span>{children}
    </Link>;
}

export default NavBarGamburgerItem;