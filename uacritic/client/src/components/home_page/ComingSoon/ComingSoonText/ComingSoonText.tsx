import {FC} from "react";

import ComingSoonTitle from "./ComingSoonTitle";
import ComingSoonDescription from "@/components/home_page/ComingSoon/ComingSoonText/ComingSoonDescription";


interface ComingSoonProps {
    readonly title: string,
    readonly description: string,
    readonly category: string,
    readonly id: number
}

const ComingSoonText: FC<ComingSoonProps> = ({title, description, category, id}) => {
    return <div>
            <ComingSoonTitle title={title} category={category} id={id}/>
            <ComingSoonDescription description={description}/>
    </div>
}

export default ComingSoonText;