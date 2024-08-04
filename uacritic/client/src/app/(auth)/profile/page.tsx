'use client';

import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import React, {useRef, useState} from 'react';
import gsap from 'gsap';

import ProfileEditForm from "@/components/profile/profileEditForm";
import ProfileAchievements from "@/components/profile/profileAchievements/profileAchievements";
import burgerMenu from '@/assets/burgerMenu.svg';


const ProfilePage = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(true);
    const container = useRef(null);
    const [showArticle, setShowArticle] = useState<React.ReactElement>(<ProfileEditForm />);

    const handleChangeArticle = (article:string) => {
        switch (article) {
            case 'editForm':
                setShowArticle(<ProfileEditForm />);
                break;
            case 'achievements':
                setShowArticle(<ProfileAchievements />);
                break;
            default:
                setShowArticle(<ProfileEditForm />);
                break;
        }
    };

    const { contextSafe} = useGSAP({scope:container});

    const onBurgerMenu = contextSafe(() => {
        setShowBurgerMenu(prevState => !prevState);
        gsap.to('#burgerMenu', { rotation: `${!showBurgerMenu ? '-=90' : '+=90'}` });
    });

    return (
        <div>
            <div className="sm:hidden md:block md:h-[6vw] lg:h-[8vw] bg-primaryText"></div>
            <div className="sm:hidden md:block md:h-[6vw] lg:h-[4vw]"></div>
            <div className={`flex flex-row md:bg-bgMain sm:h-[10vw] ${!showBurgerMenu ? 'sm:bg-primaryText' : ''}`}>
                <div ref={container} className="sm:block sm:h-[10vw] md:hidden">
                    <Image
                        id="burgerMenu"
                        alt="burger menu"
                        className="w-[10vw] h-[10vw] cursor-pointer"
                        onClick={onBurgerMenu}
                        src={burgerMenu}
                    />
                </div>
                <div className="flex sm:flex-col md:flex-row h-full w-full">
                    <div className="md:bg-bgMain sm:w-full md:w-[20vw] lg:w-[16vw]">
                        <aside
                            hidden={showBurgerMenu}
                            className="md:block md:w-[20w] lg:w-[16vw] md:bg-bgMain h-full md:mx-auto roboto-medium md:mt-[6vw] lg:mt-[2vw]"
                        >
                            <ul className="lg:mx-auto sm:w-full md:w-[22vw] lg:w-[12vw] sm:h-[10vh] sm:text-white md:text-primaryText md:h-[60vw] lg:h-[31.5vw] [&_li]:cursor-pointer [&_li]:md:h-[6vw] [&_li]:lg:h-[4vw] [&_li]:lg:text-[1vw] [&_li]:px-[1vw] [&_li]:py-[1vw] md:mx-[2vw] sm:flex sm:flex-row md:flex-col [&_li>span]:md:pl-0 [&_li]:sm:mx-auto md:[&_li]:mx-0 [&_li>span]:sm:items-center [&_li>span]:md:items-start sm:text-[3vw] md:text-[2vw]">
                                <li className="profile-nav-item" onClick={() => handleChangeArticle('editForm')}><span>Змінити профіль</span></li>
                                <li className="profile-nav-item" onClick={() => handleChangeArticle('achievements')}><span>Досягнення</span></li>
                                {/*<li className="profile-nav-item"><span>Паролі та безпека</span></li>*/}
                            </ul>
                        </aside>
                    </div>
                    <span className="border-l-2 md:ml-[6vw] lg:ml-0 md:h-[60vw] lg:h-[30vw]"></span>
                    <div className="md:flex md:flex-row sm:hidden md:h-[40vw] lg:h-[30vw]">
                        {showArticle}
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:flex-row md:hidden">
                {showArticle}
            </div>
        </div>
    );
};

export default ProfilePage;
