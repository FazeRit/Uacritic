import { useGSAP } from '@gsap/react';
import { useRef, FormEvent } from 'react';
import gsap from 'gsap';

const ProfileEditForm = () => {
    const containerRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleFormSubmit = contextSafe((event: FormEvent) => {
        event.preventDefault();
        gsap.fromTo(".submitButton", { scale: 1 }, { scale: 0.85, duration: 0.25, yoyo: true, repeat: 1, overwrite: true });
    });

    return (
        <section className="flex flex-col items-center roboto-medium sm:w-full md:w-[64vw] lg:w-[84vw]">
            <p className="text-primaryText sm:text-[4vw] md:text-xl lg:text-2xl sm:w-[34vw] md:w-[24vw] lg:w-[20vw] sm:mt-[6vw] md:mt-0">
                Змінити профіль
            </p>
            <form
                onSubmit={handleFormSubmit}
                ref={containerRef}
                className="flex flex-col lg:mt-[2vw] sm:w-[90vw] md:w-[50vw] lg:pr-[10vw] sm:mt-0"
            >
                <label htmlFor="newUserName" className="mt-[0.6vw] sm:mt-[4vw] md:mt-[2vw] lg:mt-[0.6vw]">Nickname</label>
                <input type="text" id="newUserName" className="px-[1vw] sm:h-[8vw] md:h-[6vw] lg:h-[3vw] text-[#CACED8] lg:text-lg rounded-md sm:mt-[2vw] md:mt-[1.2vw] lg:mt-[1vw]" />

                <label htmlFor="newEmail" className="mt-[0.6vw] sm:mt-[4vw] md:mt-[2vw] lg:mt-[0.6vw]">Email</label>
                <input type="email" id="newEmail" className="px-[1vw] sm:h-[8vw] md:h-[6vw] lg:h-[3vw] text-[#CACED8] lg:text-lg rounded-md sm:mt-[2vw] md:mt-[1.2vw] lg:mt-[1vw]" />

                <label htmlFor="newDate" className="mt-[0.6vw] sm:mt-[4vw] md:mt-[2vw] lg:mt-[0.6vw]">Date of birth</label>
                <input type="date" id="newDate" className="px-[1vw] sm:h-[8vw] md:h-[6vw] lg:h-[3vw] text-[#CACED8] lg:text-lg lg:text-[0.8vw] rounded-md sm:mt-[2vw] md:mt-[1.2vw] lg:mt-[1vw]" />

                <span className="sm:mx-auto">
                    <button
                        type="submit"
                        className="submitButton bg-green-400 rounded-2xl sm:w-[30vw] md:w-[14vw] lg:w-[8vw] sm:h-[8vw] lg:h-[4vw] sm:mt-[6vw] md:mt-[2vw] lg:mt-[1vw] sm:text-[4vw] md:text-[2vw] lg:text-[1vw] hover:bg-green-500 transition-transform duration-150"
                    >
                        Зберегти
                    </button>
                </span>
            </form>
        </section>
    );
}

export default ProfileEditForm;