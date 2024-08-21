import Image from 'next/image';
import hedgehogFooter from '@/assets/hedgehogFooter.svg';

const Footer = () => {
    return <footer className="w-full mt-[4vw]">
        <div className="mx-[7vw]">
            {/*<FooterLogo/>
            <FooterSocialWebs/>*/}
            <Image className="sm:hidden md:block w-full mx-auto sm:h-[40vw] md:h-[40vw] lg:h-[30vw]" width={50} height={50} src={hedgehogFooter} alt="Make footer great again"/>
        </div>
        <div  className="roboto-regular sm:mx-[5vw] mt-[1vw]">
            <hr/>
            <div className="sm:text-xs md:text-xs lg:text-[0.8vw] text-end mt-[1vw]">
                © 2024 DUMMY TEXT. All rights reserved.
            </div>
        </div>
    </footer>
};

export default Footer;
