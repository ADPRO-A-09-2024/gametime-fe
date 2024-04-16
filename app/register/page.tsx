import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Card className="mx-auto max-w-lg w-1/3">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Register
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" required type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" />
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
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
