'use client'

import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const role = formData.get('role') as string;

        try {
            const response = await fetch('https://auth-p5zxnxph7q-ew.a.run.app/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, role }),
            });

            if (response.ok) {
                console.log('Registration successful');
                router.push("/login"); // Redirect to login page
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Registration failed!');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('Registration failed!');
        } finally {
            setIsLoading(false);
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
                            <Input id="username" required type="text" name='username' />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" name='email' />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" name='password' />
                        </div>
                        <div className="space-y-2">
                            <Label>Role</Label>
                            <RadioGroup defaultValue="BUYER" name='role'>
<<<<<<< HEAD
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="BUYER" id="BUYER" />
                                <Label htmlFor="BUYER">BUYER</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="SELLER" id="SELLER" />
                                <Label htmlFor="SELLER">SELLER</Label>
                            </div>
=======
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="BUYER" id="BUYER" />
                                    <Label htmlFor="BUYER">BUYER</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="SELLER" id="SELLER" />
                                    <Label htmlFor="SELLER">SELLER</Label>
                                </div>
>>>>>>> origin/henry
                            </RadioGroup>
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 font-semibold text-center">{errorMessage}</p>
                        )}
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Register'}
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