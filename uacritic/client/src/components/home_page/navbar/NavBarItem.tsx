import {Link} from "react-router-dom";
import  {FC, ReactNode} from "react";

interface Props{
    path:string;
    children:ReactNode;
}

const NavBarItem: FC<Props> = ({path, children}) => {
    return <Link to={path} className="roboto-regular text-xl">{children}</Link>;
}

export default NavBarItem;

