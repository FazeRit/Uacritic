import {FC} from "react";
import {ComingSoonProps} from "../../../data_models/ComingSoonProps";
import ComingSoonText from "./ComingSoonText";

const ComingSoonContainer:FC = () => {
    const item = {title:"title", genres:['1', '2', '3'], description:"124333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334", imageUrl:'https://via.placeholder.com/300x200.png?text=Movie+5'};

    return <div>
        <div className="flex flex-row mt-20 w-full">
            <div className="flex flex-col">
                <p className="text-3xl roboto-bold text-primaryText">Coming soon</p>
                <img className="w-[30rem] h-[30rem] mt-10" src={item.imageUrl} alt={item.title}/>
            </div>
            <div className="ml-[10rem] mt-20">
                <ComingSoonText title={item.title} genres={item.genres} description={item.description}/>
            </div>
        </div>
    </div>
}

export default ComingSoonContainer;