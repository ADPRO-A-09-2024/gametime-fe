'use client'

import React, { useState, useEffect } from 'react';
import { Profile } from './types';
import api from './api';

const ProfilePage: React.FC = () => {
    const email = localStorage.getItem('email'); // Get email from local storage
    const [profileData, setProfileData] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            const response = await api.get(`/user/${email}`);
            setProfileData(response.data);
        };

        if (email) {
            fetchProfileData();
        }
    }, [email]);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Profile Page</h2>

                <div className="p-4 mb-4 border border-gray-300 rounded">
                    <p>Username: {profileData.username}</p>
                    <p>Email: {profileData.email}</p>
                    <p>Balance: {profileData.balance}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;