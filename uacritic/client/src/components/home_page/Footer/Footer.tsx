import {FC} from 'react';
import Image from 'next/image';

import FooterLogo from "@/components/home_page/Footer/FooterLogo";
import FooterSocialWebs from "@/components/home_page/Footer/FooterSocialWebs";
import hedgehogFooter from '@/assets/hedgehogFooter.svg';

const Footer:FC = () => {
    return <div className="w-full mt-[4vw]">
        <div className="mx-[7vw]">
            {/*<FooterLogo/>
            <FooterSocialWebs/>*/}
            <Image className="w-full mx-auto sm:h-[40vw] md:h-[40vw] lg:h-[30vw]" width={50} height={50} src={hedgehogFooter} alt="Make footer great again"/>
        </div>
        <div  className="roboto-regular sm:mx-[5vw] mt-[1vw]">
            <hr/>
            <div className="sm:text-xs md:text-xs lg:text-[0.8vw] text-end mt-[1vw]">
                © 2024 DUMMY TEXT. All rights reserved.
            </div>
        </div>
    </div>
};

export default Footer;
