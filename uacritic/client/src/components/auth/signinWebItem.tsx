import Image from 'next/image';
import {FC} from "react";

interface SignUpWebItemProps {
    path: string;
    text: string;
}

const SigninWebItem: FC<SignUpWebItemProps> = ({path, text}) => {
    return <div
        className="flex flex-row lg:mx-auto lg:w-[12vw] sm:w-[60vw] sm:ml-[10vw] md:w-[16vw] md:mx-[1.4vw]  cursor-pointer hover:bg-blue-200 sm:h-[10vw] md:h-[6vh] justify-center items-center border-[#8098F9] border-2 rounded-xl">
        <Image src={path}
               className="lg:w-[1.5vw] md:w-[3vw] md:h-[3vw] lg:h-[1.4vw] sm:w-[6vw] sm:h-[6vw] md:mr-[1vw] lg:mr-[0.5vw]"
               width={50} height={50} alt={text}></Image>
        <p className="roboto-medium lg:text-[2vh]">{text}</p>
    </div>
}

export default SigninWebItem;