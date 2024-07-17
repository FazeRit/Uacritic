import Link from 'next/link'
import  {FC} from "react";

import {NavbarProps} from '@/data_models/NavbarItems';

const NavBarItem: FC<NavbarProps> = ({path, children}) => {
    return <Link href={path} className="roboto-regular md:text-lg lg:text-2xl">{children}</Link>;
}

export default NavBarItem;

