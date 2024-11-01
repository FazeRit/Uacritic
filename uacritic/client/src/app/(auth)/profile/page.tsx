'use client';

import {ChangeEvent, FormEvent, SetStateAction, useEffect, useState} from 'react';
import Link from 'next/link';

import useRequest from '@/hooks/useRequest';
import useDebounce from '@/hooks/useDebounce';
import {useRouter} from "next/navigation";

import ProfileAchievements from '@/ui/layout/Profile/profileAchievements/profileAchievements';
import EditableFieldForm from '@/ui/layout/Auth/EditableFieldForm';
import Loading from '@/ui/status/Loading/Loading';
import ErrorFetching from "@/ui/status/FetchingError/FetchingError";
import Updating from "@/ui/status/Updating/Updating";

const UserProfile = () => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState('view');
    const [editingField, setEditingField] = useState<string | null>(null);
    const [profileData, setProfileData] = useState({
        username: '',
        birthDate: new Date()
    });
    const [apiErrors, setApiErrors] = useState<string[]>([]);

    const debouncedProfileData = useDebounce(profileData, 300);

    const {data, isLoading, error, fetchData} = useRequest<{
        email: string;
        username: string;
        dateOfBirth: string;
    }>({
        method: 'GET',
        body: undefined,
        params: undefined,
        token: '',
        withCredentials: true,
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/user/profile`,
    });

    const {isLoading: isUpdating, error: updateError, fetchData: updateProfile} = useRequest({
        params: undefined,
        token: '',
        method: 'PUT',
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/user/profile/edit`,
        withCredentials: true,
        body: {
            field: editingField,
            value: editingField === 'birthDate' ? debouncedProfileData.birthDate.toISOString() : debouncedProfileData[editingField as keyof typeof profileData],
        },
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            setProfileData({
                username: data.username,
                birthDate: new Date(data.dateOfBirth),
            });
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            router.push('/');
        }
    }, [error]);

    const handleTabChange = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const handleEditClick = (field: string) => {
        setEditingField(field);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: name === 'birthDate' ? new Date(value) : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (editingField) {
            try {
                await updateProfile();
                setEditingField(null);
                setApiErrors([]);
            } catch (err: any) {
                if (err?.errors) {
                    setApiErrors(err.errors.map((error: any) => error.msg));
                } else {
                    setApiErrors(['Failed to update Profile. Please try again.']);
                }
            }
        }
    };

    return (
        <div className="min-h-screen bg-bgMain text-primaryText flex flex-col">
            <header className="bg-primaryText text-white py-4 shadow-md">
                <h1 className="text-3xl text-center font-bold">User Profile</h1>
            </header>

            <div className="flex flex-col lg:flex-row flex-grow">
                <aside className="w-full lg:w-1/4 bg-white shadow-lg p-4">
                    <h2 className="text-xl font-semibold mb-4 text-center lg:text-left">Navigation</h2>
                    <nav className="flex flex-col items-center lg:items-start space-y-2 mb-4">
                        <button
                            onClick={() => handleTabChange('view')}
                            className={`w-full p-2 rounded-lg transition text-center duration-300 ${activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            👁️ View Profile
                        </button>
                        <button
                            onClick={() => handleTabChange('achievements')}
                            className={`w-full p-2 rounded-lg transition duration-300 ${activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            🏆 Achievements
                        </button>
                    </nav>
                    <Link href="/" passHref>
                        <button
                            className="w-full bg-primaryText text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            🏠 Back to Home
                        </button>
                    </Link>
                </aside>

                <main className="w-full lg:flex-grow p-6 bg-white shadow-md rounded-lg mt-4 lg:mt-0">
                    {isLoading && <Loading/>}
                    {error && <ErrorFetching/>}
                    {isUpdating && <Updating/>}
                    {updateError && (
                        <div className="text-red-500 bg-red-100 p-4 rounded-md mt-2">
                            {updateError?.errors?.map((error: any, index: number) => (
                                <p key={index}>{error.msg}</p>
                            ))}
                        </div>
                    )}
                    {apiErrors.length > 0 && (
                        <div className="text-red-500 bg-red-100 p-4 rounded-md mt-2">
                            {apiErrors.map((msg, index) => (
                                <p key={index}>{msg}</p>
                            ))}
                        </div>
                    )}

                    {activeTab === 'view' && (
                        <div className="text-gray-700 p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-6 text-center border-b-2 border-gray-300 pb-2">Profile
                                Details</h2>
                            <div className="space-y-4">
                                {['username', 'birthDate'].map((field) => (
                                    <div key={field}
                                         className="flex justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <span className="font-medium">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
            </span>
                                        {editingField === field ? (
                                            <EditableFieldForm
                                                field={field}
                                                value={field === 'birthDate'
                                                    ? profileData.birthDate.toISOString().split('T')[0]
                                                    : String(profileData[field as keyof typeof profileData])}
                                                onChange={handleChange}
                                                onSubmit={handleSubmit}
                                            />
                                        ) : (
                                            <div className="flex justify-between">
                    <span className="text-gray-600">
                        {field === 'birthDate'
                            ? profileData.birthDate.toLocaleDateString()
                            : String(profileData[field as keyof typeof profileData])}
                    </span>
                                                <button
                                                    onClick={() => handleEditClick(field)}
                                                    className="text-blue-600 hover:underline ml-4"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'achievements' && <ProfileAchievements/>}
                </main>
            </div>
        </div>
    );
};

export default UserProfile;
