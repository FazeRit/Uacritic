'use client';

import {ChangeEvent, FormEvent, SetStateAction, useEffect, useState} from 'react';
import Link from 'next/link';

import ProfileAchievements from '@/ui/layout/profile/profileAchievements/profileAchievements';
import EditableFieldForm from '@/ui/layout/auth/EditableFieldForm';

import useRequest from '@/hooks/useRequest';
import useDebounce from '@/hooks/useDebounce';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('view');
    const [editingField, setEditingField] = useState<string | null>(null);
    const [profileData, setProfileData] = useState({
        username: '',
        birthDate: '',
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
        body: {field: editingField, value: debouncedProfileData[editingField as keyof typeof profileData]},
    });

    useEffect(() => {
        fetchData();
    }, []);

    // TODO: handle editing field for user when error comes from api

    useEffect(() => {
        if (data) {
            setProfileData({
                username: data.username,
                birthDate: data.dateOfBirth,
            });
        }
    }, [data]);

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
            [name]: value,
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
                    setApiErrors(['Failed to update profile. Please try again.']);
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
                            className={`w-full p-2 rounded-lg transition text-center duration-300 ${
                                activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            👁️ View Profile
                        </button>
                        <button
                            onClick={() => handleTabChange('achievements')}
                            className={`w-full p-2 rounded-lg transition duration-300 ${
                                activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
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
                    {isLoading && (
                        <div className="flex justify-center items-center space-x-2">
                            <svg
                                className="animate-spin h-8 w-8 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span className="text-blue-600 font-semibold">Loading...</span>
                        </div>
                    )}
                    {error && <p className="text-red-500">{error.message}</p>}
                    {isUpdating && (
                        <div className="flex justify-center items-center space-x-2">
                            <svg
                                className="animate-spin h-8 w-8 text-yellow-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            <span className="text-yellow-500 font-semibold">Updating...</span>
                        </div>
                    )}
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
                                                value={profileData[field as keyof typeof profileData]}
                                                onChange={handleChange}
                                                onSubmit={handleSubmit}
                                            />
                                        ) : (
                                            <div className="flex justify-between">
                                                <span
                                                    className="text-gray-600">{profileData[field as keyof typeof profileData]}</span>
                                                <button onClick={() => handleEditClick(field)}
                                                        className="text-blue-500 ml-2">
                                                    ✏️ Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <ProfileAchievements/>
                    )}
                </main>
            </div>
        </div>
    );
};

export default UserProfile;
