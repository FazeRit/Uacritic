import CardContainer from "@/ui/home_page/CardContainer/CardContainer";
import ComingSoonContainer from "@/ui/home_page/ComingSoon/ComingSoonContainer";
import hedgehogHeader from '@/assets/hedgehogHeader.svg';
import Image from 'next/image';

const HomePage= () => {
    return (
        <>
            <div className="sm:hidden md:block mt-[2vw] mx-[7vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw]">
                <Image className="w-full h-full" width={50} height={50} src={hedgehogHeader} alt="We are working on this part of page"></Image>
            </div>
            <div className="mx-[7vw] mt-[5vw]">
                <CardContainer title={"ФІЛЬМИ"}/>
                <ComingSoonContainer reverse={false}/>
                <CardContainer title={"СЕРІАЛИ"}/>
                <ComingSoonContainer reverse={true}/>
                <CardContainer title={"МУЗИКА"}/>
                <ComingSoonContainer reverse={false}/>
                <CardContainer title={"ІГРИ"}/>
            </div>
        </>
    );
};

export default HomePage;