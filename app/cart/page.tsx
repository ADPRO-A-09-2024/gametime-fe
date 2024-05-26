'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartItem as CartItemType } from './types';
import EmptyCartPage from './empty/page';
import CartItemsPage from './items/page';
import { Toast, ToastProvider } from '@/components/ui/toast';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
          throw new Error('User ID not found in local storage');
        }
        setUserId(storedUserId);
        const response = await axios.get(`http://localhost:8080/api/cart/${storedUserId}`);
        setCartItems(response.data.items || []);
      } catch (error) {
        setError('Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveItem = async (itemId: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/${userId}/items/${itemId}`);
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Failed to remove item', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/${userId}/items`);
      setCartItems([]);
    } catch (error) {
      console.error('Failed to clear cart', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <ToastProvider><Toast>{error}</Toast></ToastProvider>;

  return (
    <ToastProvider>
      {cartItems.length === 0 ? (
        <EmptyCartPage />
      ) : (
        <div>
          <CartItemsPage items={cartItems} onRemove={handleRemoveItem} onClear={handleClearCart} />
        </div>
      )}
    </ToastProvider>
  );
};

export default CartPage;
