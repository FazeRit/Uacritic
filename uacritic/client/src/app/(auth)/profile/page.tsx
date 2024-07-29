import { FC } from 'react';

const ProfilePage: FC = () => {
    return <div>
        <div className="lg:h-[8vw] bg-primaryText">

        </div>
        <div className="lg:h-[6vw]">

        </div>
        <div className="flex flex-row h-full w-full">
            <aside className="lg:w-[16vw] h-full mx-aut roboto-medium lg:mt-[4vw]">
                <ul className="mx-auto lg:w-[10vw] lg:h-[31.5vw] [&_li>span]:cursor-pointer [&_li]:h-[4vw] [&_li]:lg:px-[1vw] [&_li]:lg:py-[1vw]">
                    <li><span>Змінити профіль</span></li>
                    <li><span>Досягнення</span></li>
                    <li><span>Паролі та безпека</span></li>
                </ul>
            </aside>
            <span className="border-l-2"></span>
            <section className="lg:w-[84vw] lg:ml-[6vw] roboto-medium">
                <p className="lg:text-2xl lg:w-[14vw] text-primaryText mx-auto">Змінити профіль</p>
                <form className="lg:mt-[2vw] lg:w-[30vw] flex flex-col lg:[&_label]:mt-[0.6vw] [&_input]:px-[1vw] lg:[&_input]:h-[2vw]  lg:[&_input]:mt-[1vw] [&_input]:text-[#CACED8] lg:text-lg [&_input]:rounded-xl [&_input]:focus:outline-none">
                    <label htmlFor="newUserName">Nickname</label>
                    <input type="text" id="newUserName"/>
                    <label htmlFor="newEmail">Email</label>
                    <input type="email" id="newEmail"/>
                    <label htmlFor="newDate">Date of birth</label>
                    <input type="date" id="newDate"/>
                    <button type="submit" className="lg:w-[6vw] bg-green-400 rounded-2xl lg:mt-[1vw] hover:bg-green-500  lg:h-[2vw]">Зберегти</button>
                </form>
            </section>
        </div>
    </div>;
};

export default ProfilePage;