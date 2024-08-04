import { useGSAP } from '@gsap/react';
import React, {useRef, useState} from 'react';
import gsap from 'gsap';

const ProfileEditForm = () => {
    const container = useRef(null);

    const { contextSafe } = useGSAP({ scope: container });

    const onFormSubmit = contextSafe((e: React.FormEvent) => {
        e.preventDefault();
        gsap.fromTo(".submitButton", { scale: 1 }, { scale: 0.85, duration: 0.25, yoyo: true, repeat: 1, overwrite: true });
    });

    return (
        <section className="sm:w-full md:w-[64vw] lg:w-[84vw] roboto-medium flex flex-col items-center">
            <p className="sm:text-[4vw] md:text-xl lg:text-2xl sm:w-[34vw] md:w-[24vw] sm:mt-[6vw] md:mt-0 lg:w-[20vw] text-primaryText">Змінити профіль</p>
            <form
                className="lg:mt-[2vw] sm:mt-0 sm:w-[90vw] md:w-[50vw] lg:pr-[10vw] flex flex-col sm:[&_label]:mt-[4vw] md:[&_label]:mt-[2vw] lg:[&_label]:mt-[0.6vw] [&_input]:px-[1vw] sm:[&_input]:h-[8vw] md:[&_input]:h-[6vw] lg:[&_input]:h-[3vw] sm:[&_input]:mt-[2vw] md:[&_input]:mt-[1.2vw] lg:[&_input]:mt-[1vw] [&_input]:text-[#CACED8] lg:text-lg [&_input]:rounded-md"
            >
                <label htmlFor="newUserName">Nickname</label>
                <input type="text" id="newUserName" />
                <label htmlFor="newEmail">Email</label>
                <input type="email" id="newEmail" />
                <label htmlFor="newDate">Date of birth</label>
                <input type="date" id="newDate" className="lg:text-[0.8vw]" />
                <span ref={container} className="sm:mx-auto">
                    <button onClick={onFormSubmit}
                            type="submit"
                            id="submitForm"
                            className="submitButton md:w-[14vw] sm:w-[30vw] sm:mt-[6vw] lg:w-[8vw] md:text-[2vw] lg:text-[1vw] bg-green-400 rounded-2xl md:mt-[2vw] lg:mt-[1vw] hover:bg-green-500 sm:h-[8vw] lg:h-[4vw]"
                    >
                        Зберегти
                    </button>
                </span>
            </form>
        </section>
    );
}

export default ProfileEditForm;