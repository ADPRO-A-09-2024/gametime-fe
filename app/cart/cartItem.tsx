import React from 'react';
import { CartItem as CartItemType } from './types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{item.productName}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p>{item.price}</p>
        <Button variant="destructive" onClick={() => onRemove(item.id)}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
