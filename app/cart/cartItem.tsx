"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItemDTO } from '../../lib/types';

interface CartItemProps {
    item: CartItemDTO;
    onRemove: (itemId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
                <img src={`https://via.placeholder.com/100?text=${item.productId}`} alt={item.productId} className="w-20 h-20 object-cover"/>
                <span>{item.productId}</span>
            </div>
            <Button variant="link" onClick={() => onRemove(item.id)}>Remove</Button>
        </div>
    );
};

export default CartItem;
