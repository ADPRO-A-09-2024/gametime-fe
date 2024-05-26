const BASE_URL = 'http://localhost:8080/api';

export const fetchCartItems = async () => {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cart items');
  }

  return response.json();
};

export const addItemToCart = async (item: any) => {
  const response = await fetch(`${BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }

  return response.json();
};

export const removeItemFromCart = async (id: any) => {
  const response = await fetch(`${BASE_URL}/cart/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to remove item from cart');
  }

  return response.json();
};
