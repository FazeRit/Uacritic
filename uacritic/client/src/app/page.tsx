import { FC } from "react";
import CardContainer from "../components/home_page/CardContainer/CardContainer";
import ComingSoonContainer from "../components/home_page/ComingSoon/ComingSoonContainer";
const HomePage: FC = () => {
    return (
        <>
            <div className="mt-[2vw] bg-blue-500 mx-[7vw] h-[30vw]"></div>
            <div className="mx-[7vw] mt-[5vw]">
                <CardContainer title={"ФІЛЬМИ"}/>
                <ComingSoonContainer reverse={false}/>
                <CardContainer title={"СЕРІАЛИ"}/>
                <ComingSoonContainer reverse={true}/>
                <CardContainer title={"МУЗИКА"}/>
                <ComingSoonContainer reverse={false}/>
                <CardContainer title={"ІГРИ"}/>
            </div>
        </>
    );
};

export default HomePage;