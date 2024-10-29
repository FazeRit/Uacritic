import {FC} from "react";

import ComingSoonTitle from "./ComingSoonTitle";
import ComingSoonDescription from "@/ui/layout/homePage/ComingSoon/ComingSoonText/ComingSoonDescription";


interface ComingSoonProps {
    readonly title: string,
    readonly description: string,
    readonly category: string,
    readonly id: number
}

const ComingSoonText: FC<ComingSoonProps> = ({title, description, category, id}) => {
    return <div>
        <ComingSoonTitle title={title} id={id}/>
        <ComingSoonDescription description={description}/>
    </div>
}

export default ComingSoonText;