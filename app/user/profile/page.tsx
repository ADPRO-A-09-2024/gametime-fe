import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    // Static profile data
    const profileData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        saldo: "1000",
        id: "12345"
    };

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
                            value={profileData.saldo}
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
