import Link from 'next/link'
import  {FC, ReactNode} from "react";

interface Props{
    path:string;
    children:ReactNode;
}

const NavBarItem: FC<Props> = ({path, children}) => {
    return <Link href={path} className="roboto-regular md:text-lg lg:text-2xl">{children}</Link>;
}

export default NavBarItem;
