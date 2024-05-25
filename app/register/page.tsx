'use client'

import { useState } from 'react';
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await fetch('https://auth-p5zxnxph7q-ew.a.run.app/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            console.log('Registration successful');
            // Redirect to login page or perform any other necessary actions
        } else {
            console.log('Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Card className="mx-auto max-w-lg w-1/3">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Register
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" required type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <Button className="w-full" type="submit">
                            Register
                        </Button>
                        <div className="text-center">
                            <p className="text-grey-dark text-sm">
                                Already have an account?{" "}
                                <Link
                                    className="no-underline text-blue font-bold"
                                    href="/login"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
