import { FC } from 'react';
import Image from 'next/image';

import signUpHedgehog from '@/assets/signUpHedgehog.svg';
import AuthEmailInput from "@/components/signin/authEmailInput";
import AuthPasswordInput from "@/components/signin/authPasswordInput";
import Link from "next/link";
import AuthUsernameInput from "@/components/signin/authUsernameInput";
import AuthConfirmPasswordInput from "@/components/signin/authConfirmPasswordInput";

const signUpPage: FC = () => {
    return <div className="w-full h-screen flex flex-row md:bg-[#E3D9CF] lg:bg-bgMain">
        <div className="w-[50vw] bg-[#E3D9CF] lg:block sm:hidden">
            <Image src={signUpHedgehog} alt="cute hedgehog" className="w-[50vw] h-full" width={50} height={50}></Image>
        </div>
        <div
            className="sm:w-[88vw] sm:mt-[6vh] sm:mx-auto md:w-[44vw] md:h-[60vw] md:border-4 md:bg-white lg:bg-bgMain lg:border-none sm:p-[5vw] md:p-[2vw] lg:p-0 sm:rounded-3xl border-primaryText lg:rounded-none lg:w-[34vw] lg:mx-[8vw] flex-row md:mt-[6vw] lg:mt-[8vw] lg:h-[20vh] lg:justify-center">
            <div>
                <p className="roboto-bold sm:text-[6vw] md:text-[3vw] lg:text-3xl">Створити свій аккаунт</p>
                <p className="sm:hidden md:block text-[#71717A] sm:mt-[0.1vh] md:mt-[0.2vh] sm:text-[2.6vw] md:text-[1.8vw] lg:text-lg">Відкрий всі можливості</p>
            </div>
            <form className="lg:mx-[1vw]">
                <AuthUsernameInput/>
                <AuthEmailInput/>
                <AuthPasswordInput/>
                <AuthConfirmPasswordInput/>
            </form>
            <div>
                <button type="submit"
                    className="bg-[#8098F9] rounded-lg w-full sm:h-[8vw] md:h-[4vw] lg:h-[3vw] text-white roboto-medium sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw] hover:bg-blue-500">Створити
                </button>
                <div className="flex justify-center items-center sm:mt-[3vw]  md:mt-[2vw] lg:mt-[1vw] text-gray-400">
                    <p>Не маєте аккаунт? <Link href="/signin" className="text-[#8098F9] text-sm">Увійдіть</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default signUpPage;