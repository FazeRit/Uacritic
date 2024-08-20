'use client';

import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import React, {useRef, useState} from 'react';
import gsap from 'gsap';

import ProfileEditForm from "@/components/profile/profileEditForm";
import ProfileAchievements from "@/components/profile/profileAchievements/profileAchievements";
import burgerMenu from '@/assets/burgerMenu.svg';


const ProfilePage = () => {
    const username = 'username';

    const [showBurgerMenu, setShowBurgerMenu] = useState(true);
    const container = useRef(null);
    const [showArticle, setShowArticle] = useState<React.ReactElement>(<ProfileEditForm />);

    const lookupTable = {
        "editForm": ()=> setShowArticle(<ProfileEditForm />),
        "achievements": ()=> setShowArticle(<ProfileAchievements />)
    }

    const { contextSafe} = useGSAP({scope:container});

    const onBurgerMenu = contextSafe(() => {
        setShowBurgerMenu(prevState => !prevState);
        gsap.to('#burgerMenu', { rotation: `${!showBurgerMenu ? '-=90' : '+=90'}` });
    });

    return (
        <div>
            <div className="sm:hidden md:block md:h-[12vw] lg:h-[8vw] bg-primaryText ">
                <div className="lg:ml-[6vw] flex flex-row md:w-[40vw] lg:w-[20vw] justify-center items-center">
                    <img alt={'User'} src="https://via.placeholder.com/300x300.png?text=Movie+1"
                         className="rounded-full md:w-[11vw] lg:w-[7vw] md:h-[11vw] lg:h-[7vw] md:mt-[0.5vw]"
                         width={50} height={50}/>
                    <p className="text-white md:text-3xl md:w-[10vw] lg:w-[8vw] md:h-[4vw] lg:h-[2vw] md:ml-[3vw] lg:ml-[2vw]">{username}</p>
                </div>
            </div>
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
                                <li className="profile-nav-item" onClick={() => lookupTable['editForm']()}><span>Змінити профіль</span>
                                </li>
                                <li className="profile-nav-item" onClick={() => lookupTable['achievements']()}>
                                    <span>Досягнення</span></li>
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
            <div className="md:hidden flex flex-col [&_*]:mx-auto mt-[4vw]">
                <img alt={'User'} src="https://via.placeholder.com/300x300.png?text=Movie+1"
                     className="rounded-full sm:w-[30vw] h-[30vw]" width={50}
                     height={50}/>
                <p className="sm:text-[8vw] sm:w-[35vw] sm:h-[10vw] sm:mt-[2vw]">{username}</p>
            </div>
            <div className="sm:flex sm:flex-row md:hidden">
                {showArticle}
            </div>
        </div>
    );
};

export default ProfilePage;
