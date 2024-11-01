'use client';

import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import signUpHedgehog from '@/assets/logo/signUpHedgehog.svg';

import AuthEmailInput from "@/ui/layout/Auth/authEmailInput";
import AuthPasswordInput from "@/ui/layout/Auth/authPasswordInput";
import AuthUsernameInput from "@/ui/layout/Auth/authUsernameInput";
import AuthConfirmPasswordInput from "@/ui/layout/Auth/authConfirmPasswordInput";

import useRequest from '@/hooks/useRequest';


const SignUpPage = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        api: ''
    });

    const {data, isLoading, error, fetchData} = useRequest({
        url: process.env.NEXT_PUBLIC_CLIENT_URL + '/api/user/signup',
        method: 'POST',
        token: '',
        body: formData,
        params: {},
        withCredentials: true,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            api: ''
        });

        if (!formData.username || !formData.email || !formData.password) {
            setErrors(prev => ({...prev, api: 'All fields are required'}));
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrors(prev => ({...prev, confirmPassword: 'Passwords do not match'}));
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
            <div className="w-[50vw] bg-[#E3D9CF] lg:block sm:hidden">
                <Image src={signUpHedgehog} alt="cute hedgehog" className="w-[50vw] h-full" width={50} height={50}/>
            </div>
            <div
                className="sm:w-[88vw] sm:mt-[6vh] sm:mx-auto md:w-[440px] md:h-[520px] md:border-4 md:bg-white lg:bg-bgMain lg:border-none sm:p-[5vw] md:p-[2vw] lg:p-0 sm:rounded-3xl border-primaryText lg:rounded-none lg:w-[34vw] lg:mx-[8vw] flex-row md:mt-[6vw] lg:mt-[8vw] lg:h-[20vh] lg:justify-center">
                <div>
                    <p className="roboto-bold sm:text-[6vw] md:text-[3vw] lg:text-3xl">Create your account</p>
                    <p className="sm:hidden md:block text-[#71717A] sm:mt-[0.1vh] md:mt-[0.2vh] sm:text-[2.6vw] md:text-[1.8vw] lg:text-lg">
                        Open all abilities
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="lg:mx-[1vw]">
                    <AuthUsernameInput
                        value={formData.username}
                        onChange={handleInputChange}
                        error={errors.username}
                        disabled={isLoading}
                    />
                    <AuthEmailInput
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        disabled={isLoading}
                    />
                    <AuthPasswordInput
                        value={formData.password}
                        onChange={handleInputChange}
                        error={errors.password}
                        disabled={isLoading}
                    />
                    <AuthConfirmPasswordInput
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        error={errors.confirmPassword}
                        disabled={isLoading}
                    />
                    {errors.api && <p className="text-red-500">{errors.api}</p>}
                    <button type="submit"
                            disabled={isLoading}
                            className={`bg-[#8098F9] rounded-lg w-full sm:h-[8vw] md:h-[4vw] lg:h-[3vw] text-white roboto-medium sm:mt-8 hover:bg-blue-500 ${isLoading ? 'opacity-50' : ''}`}>
                        {isLoading ? 'Creating...' : 'Create'}
                    </button>
                    <div className="flex justify-center items-center sm:mt-[3vw] md:mt-[2vw] lg:mt-[1vw] text-gray-400">
                        <p>You have an account? <Link href="/signin" className="text-[#8098F9] text-sm">Sign in</Link>
                        </p>
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
        </div>
    );
};

export default SignUpPage;
