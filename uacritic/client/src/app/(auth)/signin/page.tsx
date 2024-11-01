'use client';

import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import signUpHedgehog from '@/assets/logo/signUpHedgehog.svg';
import SigninWebItem from '@/ui/layout/Auth/signinWebItem';
import googleLogoSvg from '@/assets/logo/googleLogo.svg';
import githubBlackLogo from '@/assets/logo/githubBlackLogo.svg';
import AuthEmailInput from "@/ui/layout/Auth/authEmailInput";
import AuthPasswordInput from "@/ui/layout/Auth/authPasswordInput";

import useRequest from '@/hooks/useRequest';

const SignInPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        api: ''
    });

    const {data, isLoading, error, fetchData} = useRequest({
        url: process.env.NEXT_PUBLIC_CLIENT_URL + '/api/user/login',
        method: 'POST',
        token: '',
        body: {email, password},
        params: {},
        withCredentials: true,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({email: '', password: '', api: ''});

        if (!email || !password) {
            setErrors(prev => ({...prev, api: 'All fields are required'}));
            return;
        }

        await fetchData();
    };

    useEffect(() => {
        if (data) {
            router.push('/');
        }
    }, [data, router]);

    useEffect(() => {
        if (error) {
            if (error.errors && error.errors.length > 0) {
                error.errors.forEach((err: { type: string, msg: string, path: string }) => {
                    setErrors(prev => ({...prev, [err.path]: err.msg}));
                });
            } else {
                setErrors(prev => ({...prev, api: error.message}));
            }
        }
    }, [error]);

    return (
        <div className="w-full h-screen flex flex-row md:bg-[#E3D9CF] lg:bg-bgMain">
            <div
                className="sm:w-[88vw] sm:mt-[6vh] sm:mx-auto md:w-[44vw] md:h-[60vw] md:border-4 md:bg-white lg:bg-bgMain lg:border-none sm:p-[5vw] md:p-[2vw] lg:p-0 sm:rounded-3xl border-primaryText lg:rounded-none lg:w-[30vw] lg:mx-[10vw] flex-row md:mt-[6vw] lg:mt-[8vw] lg:h-[20vh] lg:justify-center">
                <div>
                    <p className="roboto-bold sm:text-[8vw] md:text-[4vw] lg:text-3xl">Sign in</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <AuthEmailInput
                        value={email}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        error={errors.email}
                    />
                    <AuthPasswordInput
                        value={password}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        error={errors.password}
                    />
                    {errors.api && <p className="text-red-500">{errors.api}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-[#8098F9] rounded-lg w-full sm:h-[8vw] md:h-[4vw] lg:h-[3vw] text-white roboto-medium sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw] hover:bg-blue-500 ${isLoading ? 'opacity-50' : ''}`}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                    <div className="flex justify-center items-center sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw] text-gray-400">
                        <p>No account? <Link href="/signup"
                                             className="text-[#8098F9] text-sm cursor-pointer hover:text-blue-900">Create
                            new</Link></p>
                    </div>
                </form>
                <div className="flex justify-center items-center sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw]">
                    <Link href="/">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
                            Back to Main Page
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-[50vw] bg-[#E3D9CF] lg:block sm:hidden lg:ml-[3vw]">
                <Image src={signUpHedgehog} alt="cute hedgehog" className="w-[50vw] h-full" width={600} height={600}/>
            </div>
        </div>
    );
};

export default SignInPage;
