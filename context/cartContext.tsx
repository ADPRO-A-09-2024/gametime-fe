import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  setCartItems: (items: CartItem[]) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const setCartItems = (items: CartItem[]) => {
    setCart(items);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};