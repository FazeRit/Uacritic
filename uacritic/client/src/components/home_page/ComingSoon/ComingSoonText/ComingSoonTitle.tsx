import {FC} from 'react';
import Link from 'next/link';

const ComingSoonTitle:FC<{title:string}> = ({title}) => {
    return <div className=" sm:mt-[4vw] md:mt-[3vw]">
        {/*TODO: make links*/}
        <Link href="/" className="roboto-black text-primaryText sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw]">{title}</Link>
    </div>
}

export default ComingSoonTitle;