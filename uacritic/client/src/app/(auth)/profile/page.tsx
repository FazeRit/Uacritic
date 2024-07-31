import { FC } from 'react';

const ProfilePage: FC = () => {
    return <div>
        <div className="sm:hidden md:block md:h-[6vw] lg:h-[8vw] bg-primaryText">

        </div>
        <div className="sm:hidden md:block md:h-[6vw] lg:h-[4vw]">

        </div>
        <div className="flex sm:flex-col md:flex-row h-full w-full">
            <aside className="sm:full md:w-[20w] lg:w-[16vw] sm:bg-primaryText md:bg-bgMain  h-full md:mx-auto roboto-medium md:mt-[6vw] lg:mt-[4vw]">
                <ul className="lg:mx-auto sm:w-full sm:mx-auto md:w-[22vw] lg:w-[12vw] sm:h-[12vh] sm:text-white md:text-primaryText md:h-[60vw] lg:h-[31.5vw] [&_li]:cursor-pointer [&_li]:md:h-[6vw] [&_li]:lg:h-[4vw] [&_li]:lg:text-[1vw] [&_li]:px-[1vw] [&_li]:py-[1vw] md:mx-[2vw] [&_li>span]:sm:pl-[6vw] [&_li>span]:md:pl-0">
                    <li className="profile-nav-item"><span>Змінити профіль</span></li>
                    <li className="profile-nav-item"><span>Досягнення</span></li>
                    <li className="profile-nav-item"><span>Паролі та безпека</span></li>
                </ul>
            </aside>
            <span className="border-l-2"></span>
            <section className="sm:w-full md:w-[78vw] lg:w-[84vw] md:ml-[2vw] lg:ml-0 roboto-medium">
                <p className="sm:text-[4vw] md:text-xl lg:text-2xl sm:w-[34vw] md:w-[24vw] sm:mt-[6vw] md:mt-0 lg:w-[20vw] text-primaryText mx-auto">Змінити профіль</p>
                <form className="lg:mt-[2vw] sm:mt-0 sm:w-[90vw] md:w-[50vw] lg:w-[30vw] flex flex-col sm:[&_label]:mt-[4vw] md:[&_label]:mt-[2vw] lg:[&_label]:mt-[0.6vw] [&_input]:px-[1vw] sm:[&_input]:h-[8vw] md:[&_input]:h-[4vw] lg:[&_input]:h-[2vw] sm:[&_input]:mt-[2vw] md:[&_input]:mt-[1.2vw] lg:[&_input]:mt-[1vw] [&_input]:text-[#CACED8] lg:text-lg sm:mx-[5vw] md:mx-[2vw] lg:mx-[2vw] [&_input]:rounded-md">
                    <label htmlFor="newUserName">Nickname</label>
                    <input type="text" id="newUserName" />
                    <label htmlFor="newEmail">Email</label>
                    <input type="email" id="newEmail"/>
                    <label htmlFor="newDate">Date of birth</label>
                    <input type="date" id="newDate" className="lg:text-[0.8vw]"/>
                    <button type="submit" className="md:w-[14vw] sm:w-[40vw] sm:mt-[6vw] sm:mx-auto lg:w-[8vw] md:text-[2vw] lg:text-[1vw] bg-green-400 rounded-2xl md:mt-[2vw] lg:mt-[1vw] hover:bg-green-500 sm:h-[6vw] lg:h-[4vw]">Зберегти</button>
                </form>
            </section>
        </div>
    </div>;
};

export default ProfilePage;