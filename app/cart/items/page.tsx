import React from 'react';
import { CartItem as CartItemType } from '../types';
import { Button } from '@/components/ui/button';

interface CartItemsPageProps {
  items: CartItemType[];
  onRemove: (itemId: string) => Promise<void>;
  onClear: () => void;
}

const CartItemsPage: React.FC<CartItemsPageProps> = ({ items, onRemove, onClear }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded">
            <div>{item.productName}</div>
            <Button variant="destructive" onClick={() => onRemove(item.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button variant="destructive" onClick={onClear}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartItemsPage;
