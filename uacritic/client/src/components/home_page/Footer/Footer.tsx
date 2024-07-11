import {FC} from 'react';
import FooterLogo from "@/components/home_page/Footer/FooterLogo";
import FooterSocialWebs from "@/components/home_page/Footer/FooterSocialWebs";

const Footer:FC = () => {
    return <div className="w-full">
        <div>
            <FooterLogo/>
            <FooterSocialWebs/>
        </div>
        <div className="roboto-regular lg:text-lg">
            © 2024 DUMMY TEXT. All rights reserved.
        </div>
    </div>
};

export default Footer;
