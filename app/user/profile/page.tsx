'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProfileData {
    id: number;
    username: string;
    email: string;
    role: string;
    balance: number;
    name: string;
    enabled: boolean;
    authorities: any[];
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
}

const ProfilePage = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [userEmail, setUserEmail] = useState('kevin@gmail.com'); // replace with the actual user's email

    useEffect(() => {
        fetch(`http://localhost:8081/user/${userEmail}`)
            .then(response => response.json())
            .then(data => setProfileData(data)) // set profileData to data directly
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [userEmail]);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Profile Page</h2>
                <div className="space-y-4">
                    <div className="mb-4">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            value={profileData.username}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            value={profileData.email}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="saldo">Saldo</Label>
                        <Input
                            id="saldo"
                            value={profileData.balance}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-8">
                        <Label htmlFor="id">ID</Label>
                        <Input
                            id="id"
                            value={profileData.id}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Want to go back?{' '}
                        <Link href="/">
                            <span className="font-medium text-indigo-600 hover:text-indigo-500">Home</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;