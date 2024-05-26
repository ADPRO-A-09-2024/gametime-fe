"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const EmptyCartPage: React.FC = () => {
    const router = useRouter();

    return (
        <Card className="mx-auto my-8 p-6 max-w-2xl">
            <CardContent className="text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <p className="text-gray-500 mb-6">Your cart looks lonely. Why not add something fun?</p>
                <Button variant="link" onClick={() => router.push('/products')}>
                    Browse Products
                </Button>
            </CardContent>
        </Card>
    );
};

export default EmptyCartPage;