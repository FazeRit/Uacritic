import {FC} from "react";
import CardContainer from "../components/home_page/CardContainer/CardContainer";
import ComingSoonContainer from "../components/home_page/ComingSoon/ComingSoonContainer";


const HomePage:FC = () => {
  return <>
    <div className="mt-5 bg-blue-500 mx-[7rem] h-[30rem]"></div>
    <div className="mx-[7rem] mt-10">
      <CardContainer/>
      <ComingSoonContainer/>
    </div>

  </>
};

export default HomePage;