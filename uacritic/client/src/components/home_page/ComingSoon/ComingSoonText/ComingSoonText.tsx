import {FC} from "react";

import ComingSoonTitle from "./ComingSoonTitle";
import ComingSoonDescription from "@/components/home_page/ComingSoon/ComingSoonText/ComingSoonDescription";


interface ComingSoonProps{
    readonly title:string,
    readonly description:string,
}

const ComingSoonText:FC<ComingSoonProps> = ({title, description}) => {
    return <div>
        <div>
            <ComingSoonTitle title={title}/>
        </div>
        <div>
            <ComingSoonDescription description={description}/>
        </div>
    </div>
}

export default ComingSoonText;