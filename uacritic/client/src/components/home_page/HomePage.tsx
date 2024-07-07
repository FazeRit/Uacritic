import {FC} from "react";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";

const HomePage:FC = () => {
    return <div className="mx-10">
        <Header />
        <NavBar />
    </div>
};

export default HomePage;