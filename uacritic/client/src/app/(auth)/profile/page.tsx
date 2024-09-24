'use client';

import {ChangeEvent, FormEvent, SetStateAction, useState} from 'react';
import Link from 'next/link';
import ProfileAchievements from '@/ui/layout/profile/profileAchievements/profileAchievements'

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('view');
    const [editingField, setEditingField] = useState<string | null>(null);
    const [profileData, setProfileData] = useState({
        email: 'user@example.com',
        nickname: 'UserNickname',
        birthDate: '1990-01-01',
    });

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEditingField(null);
        console.log('Updated profile data:', profileData);
    };

    return (
        <div className="min-h-screen bg-bgMain text-primaryText flex flex-col">
            <header className="bg-primaryText text-white py-4 shadow-md">
                <h1 className="text-3xl text-center font-bold">User Profile</h1>
            </header>

            <div className="flex flex-grow">
                <aside className="w-1/4 bg-white shadow-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                    <nav className="flex flex-col space-y-2">
                        <button
                            onClick={() => handleTabChange('view')}
                            className={`p-2 rounded-lg transition text-center duration-300 ease-in-out ${
                                activeTab === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            👁️ View Profile
                        </button>
                        <button
                            onClick={() => handleTabChange('achievements')}
                            className={`p-2 rounded-lg transition duration-300 ease-in-out ${
                                activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            🏆 Achievements
                        </button>
                    </nav>
                    <Link href="/" passHref>
                        <button
                            className="mt-4 w-full bg-primaryText text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            🏠 Back to Home
                        </button>
                    </Link>
                </aside>

                <main className="flex-grow p-6 bg-white shadow-md rounded-lg">
                    {activeTab === 'view' && (
                        <div className="text-gray-700 p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-6 text-center border-b-2 border-gray-300 pb-2">Profile
                                Details</h2>
                            <div className="space-y-4">
                                {['email', 'nickname', 'birthDate'].map((field) => (
                                    <div key={field}
                                         className="flex justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <span
                                            className="font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
                                        {editingField === field ? (
                                            <form onSubmit={handleSubmit} className="flex-grow">
                                                <input
                                                    type={field === 'birthDate' ? 'date' : field === 'email' ? 'email' : 'text'}
                                                    name={field}
                                                    value={profileData[field as keyof typeof profileData]}
                                                    onChange={handleChange}
                                                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                                <button type="submit"
                                                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">Save
                                                </button>
                                            </form>
                                        ) : (
                                            <div className="flex justify-between">
                                                <span
                                                    className="text-gray-600">{profileData[field as keyof typeof profileData]}</span>
                                                <button onClick={() => handleEditClick(field)}
                                                        className="text-blue-500">✏️ Edit
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
