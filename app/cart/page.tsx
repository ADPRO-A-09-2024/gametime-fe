"use client";

import { useEffect, useState } from 'react';
import { CartItemDTO } from '../../lib/types';
import EmptyCartPage from './empty/page';
import CartItemsPage from './items/page';
import { Toast } from '@/components/ui/toast';

const CartPage = () => {
    const [cart, setCart] = useState<CartItemDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/cart/user/1', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }
                const data = await response.json();
                setCart(data.items);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    const handleRemoveItem = async (itemId: string) => {
        try {
            const response = await fetch(`http://localhost:8081/api/cart/1/items/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to remove item');
            }
            setCart(cart.filter(item => item.id !== itemId));
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    const handleClearCart = async () => {
        try {
            const response = await fetch(`http://localhost:8081/api/cart/user/1/clear`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to clear cart');
            }
            setCart([]);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <Toast>{error}</Toast>;
    }

    return (
        <div>
            {cart.length === 0 ? (
                <EmptyCartPage />
            ) : (
                <CartItemsPage items={cart} onRemove={handleRemoveItem} onClear={handleClearCart} />
            )}
        </div>
    );
};

export default CartPage;
