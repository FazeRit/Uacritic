
import Image from 'next/image';
import Link from 'next/link';

import signUpHedgehog from '@/assets/logo/signUpHedgehog.svg';
import SigninWebItem from '@/components/signin/signinWebItem'
import AuthEmailInput from "@/components/signin/authEmailInput";
import AuthPasswordInput from "@/components/signin/authPasswordInput";
import googleLogoSvg from '@/assets/logo/googleLogo.svg';
import githubBlackLogo from '@/assets/logo/githubBlackLogo.svg';

const signUpPage= () => {
    return <div className="w-full h-screen flex flex-row md:bg-[#E3D9CF] lg:bg-bgMain">
        <div className="sm:w-[88vw] sm:mt-[6vh] sm:mx-auto md:w-[44vw] md:h-[60vw] md:border-4 md:bg-white lg:bg-bgMain lg:border-none sm:p-[5vw] md:p-[2vw] lg:p-0 sm:rounded-3xl border-primaryText lg:rounded-none lg:w-[30vw] lg:mx-[10vw] flex-row md:mt-[6vw] lg:mt-[8vw] lg:h-[20vh] lg:justify-center">
            <div>
                <p className="roboto-bold sm:text-[8vw] md:text-[4vw] lg:text-3xl">Ввійдіть в аккаунт</p>
                <p className="sm:hidden md:block text-[#71717A] sm:mt-[0.1vh] md:mt-[0.2vh] sm:text-[2.6vw] md:text-[1.8vw] lg:text-lg">Виберіть метод входу</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-[1vh] sm:mt-[1vh] lg:mt-[2vh] border-lineMain sm:border-b-2 md:border-none sm:pb-4 rounded-xl md:pb-0">
                    <SigninWebItem path={googleLogoSvg} text={'Google'}/>
                    <SigninWebItem path={githubBlackLogo} text={'GitHub'}/>
                </div>
            </div>
            <div className="flex items-center justify-center sm:mt-[2vw] lg:mt-[1vw]">
                <p className="text-[#71717A] sm:text-sm md:text-md">або ввійдіть через пошту</p>
            </div>
            <div>
                <AuthEmailInput/>
            </div>
            <div>
                <AuthPasswordInput/>
            </div>
            <div>
                <div className="flex flex-row md:mt-[1vw] sm:mt-[3vw]">
                    <input id="remember-me" className="w-5 h-5 " type="checkbox"/>
                    <label htmlFor="remember-me" className="text-sm text-[#71717A] roboto-thin sm:ml-[2vw] md:ml-[0.6vw] py-auto">Запам'ятати мене</label>
                    <p className="ml-auto text-[#8098F9] text-sm roboto-medium py-auto cursor-pointer hover:text-blue-900">Забув пароль?</p>
                </div>
            </div>
            <div>
                <button className="bg-[#8098F9] rounded-lg w-full sm:h-[8vw] md:h-[4vw] lg:h-[3vw] text-white roboto-medium sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw] hover:bg-blue-500">Ввійти</button>
                <div className="flex justify-center items-center sm:mt-[3vw]  md:mt-[2vw] lg:mt-[1vw] text-gray-400">
                <p>Не маєте аккаунт? <Link href="/signup" className="text-[#8098F9] text-sm">Створіть новий</Link></p>
                </div>
            </div>
        </div>
        <div className="w-[50vw] bg-[#E3D9CF] lg:block sm:hidden lg:ml-[3vw]">
            <Image src={signUpHedgehog} alt="cute hedgehog" className="w-[50vw] h-full" width={50} height={50}></Image>
        </div>
    </div>
}

export default signUpPage;