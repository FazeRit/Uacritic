import Image from 'next/image';
import hedgehogHeader from "@/assets/hedgehogHeader.svg";

const About = () => {
    return <div className="w-full h-full flex justify-center items-center mt-5">
        <Image className="w-[50vw] h-[40vw]" width={50} height={50}
               src={hedgehogHeader}
               alt="We are working on this part of page"/>
    </div>

}

export default About;