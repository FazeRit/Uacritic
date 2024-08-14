import {FC} from "react";
import {ComingSoonProps} from "@/data_models/ComingSoonProps";
import GenresContainer from "../GenresContainer/GenresContainer";
import ComingSoonTitle from "./ComingSoonTitle";
import ComingSoonDescription from "@/components/home_page/ComingSoon/ComingSoonText/ComingSoonDescription";

const ComingSoonText:FC<ComingSoonProps> = ({title, genres, description}) => {
    return <div>
        <div>
            <ComingSoonTitle title={title}/>
            <GenresContainer genres={genres}/>
        </div>
        <div>
            <ComingSoonDescription description={description}/>
        </div>
    </div>
}

export default ComingSoonText;