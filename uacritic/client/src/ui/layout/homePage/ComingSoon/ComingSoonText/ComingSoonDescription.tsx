import {FC} from 'react';

const ComingSoonDescription: FC<{ description: string }> = ({description}) => {
    return <div
        className=" sm:hidden md:block  lg:w-[40vw] md:h-[1vw] lg:h-[20vw] break-words text-primaryText text-xl">
        <p className="md:mt-[0.5vw] lg:mt-[1vw] roboto-black md:text-[2vw] lg:text-[24px] text-primaryText">Description</p>
        <p className="md:mt-[0.5vw] lg:mt-[1vw] md:text-[1.3vw] sm:text-[1vw] text-black roboto-regular lg:text-[1.1vw]">
            {description}
        </p>
    </div>
}

export default ComingSoonDescription;