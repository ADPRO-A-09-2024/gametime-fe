'use client'

import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);

        try {
            const response = await fetch('https://auth-p5zxnxph7q-ew.a.run.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                console.log('Logged in token: ' + localStorage.getItem('token'));
            } else {
                const {description} = await response.json();
                throw new Error(description);
            }

            const responseUser = await fetch('https://auth-p5zxnxph7q-ew.a.run.app/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (responseUser.ok) {
                const { id, email } = await responseUser.json();
                localStorage.setItem('idUser', id);
                localStorage.setItem('email', email);
                console.log('Logged in idUser: ' + localStorage.getItem('idUser'));
                console.log('Logged in email: ' + localStorage.getItem('email'));
                router.push("/"); // Redirect to home page
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Login failed!';
            setErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Card className="mx-auto max-w-lg w-1/3">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 font-semibold text-center">{errorMessage}</p>
                        )}
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Login'}
                        </Button>
                        <div className="text-center">
                            <p className="text-grey-dark text-sm">
                                Don{"'"}t have an account?{" "}
                                <Link
                                    href="/register"
                                    className="no-underline text-blue font-bold"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}