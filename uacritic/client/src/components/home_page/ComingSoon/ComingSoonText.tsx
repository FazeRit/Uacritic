import {FC} from "react";
import {ComingSoonProps} from "@/data_models/ComingSoonProps";

const ComingSoonText:FC<ComingSoonProps> = ({title, genres, description}) => {
    return <div>
        <p>{title}</p>
        <div>
            {genres.map((genre, index) => {
                return <p /*key={index} genre={genre}*/>123</p>
            })}
        </div>
    </div>
}

export default ComingSoonText;