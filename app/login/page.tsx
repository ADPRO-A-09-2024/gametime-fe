import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Card className="mx-auto max-w-lg w-1/3">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit">
                            Login
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
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
