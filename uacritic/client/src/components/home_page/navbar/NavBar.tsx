import {FC} from "react";
import {Link} from "react-router-dom";

const NavBar: FC = () => {
    return <nav>
        <ul>
            <Link to="/movies">Фільми</Link>
            <Link to="/serials">Серіали</Link>
            <Link to="/music">Музика</Link>
            <Link to="/games">Ігри</Link>
            <Link to="/about">Про нас</Link>
        </ul>
    </nav>
}

export default NavBar;