import {FC} from "react";
import Header from "./header/Header";
import CardContainer from "./CardContainer/CardContainer";


const HomePage:FC = () => {
    return <>
        <Header/>
        <div className="mt-5 bg-blue-500 mx-[7rem] h-[30rem]"></div>
        <div className="mx-[7rem] mt-10">
            <CardContainer/>
        </div>
    </>
};

export default HomePage;