"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItemDTO } from '../../../lib/types';
import CartItem from '../cartItem';
import { Card, CardContent } from '@/components/ui/card';

interface CartItemsPageProps {
    items: CartItemDTO[];
    onRemove: (itemId: string) => void;
    onClear: () => void;
}

const CartItemsPage: React.FC<CartItemsPageProps> = ({ items = [], onRemove, onClear }) => {
    return (
        <Card className="mx-auto my-8 p-6 max-w-4xl">
            <CardContent>
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <div className="mb-6">
                    {items.map(item => (
                        <CartItem key={item.id} item={item} onRemove={onRemove} />
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button variant="destructive" onClick={onClear}>Clear Cart</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default CartItemsPage;
