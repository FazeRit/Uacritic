import {FC} from 'react';
import Link from 'next/link';

const ComingSoonTitle:FC<{title:string}> = ({title}) => {
    return <div className=" sm:mt-[6vw] md:mt-[3vw]">
        {/*TODO: make links*/}
        <Link
            href="/"
            className="roboto-black text-black sm:text-[4vw] md:text-[20px] lg:text-[26px] relative custom-hover-effect"
        >
            {title}
            <span className="hover-line"></span>
        </Link>
    </div>
}

export default ComingSoonTitle;