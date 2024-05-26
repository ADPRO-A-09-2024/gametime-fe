'use client'

import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import api from './api';

const CreateTransactionPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState<string[]>([]);

  const handleSubmitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    useEffect(() => {
        api.get(`api/cart/user/${localStorage.getItem('idUser')}`)
          .then(response => setProducts(response.data.items.map((items: { id: any; }) => items.id)));
    });

    useEffect(() => {
        api.get(`product/get/${products[0]}}`)
          .then(response => setSellerId(response.data.seller.id));
    });

    if (!products || !sellerId) {
        return <div>Loading...</div>;
    }    

    const form = e.currentTarget;
    const formData = new FormData(form);

    await api.post('/transaction/create', {
        buyerId: localStorage.getItem('idUser'),
        sellerId: sellerId,
        products: products
    }).then(response => {
        window.location.href = `/transaction/get/${response.data.id}`;
    })
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
        <Card className="mx-auto max-w-lg w-1/3">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">
                    Create Transaction
                </CardTitle>
            </CardHeader>
            <CardContent>
                {products.map(product => (
                        <div className="mb-4">
                        <Label htmlFor="name">Product</Label>
                        <Input
                            id="product"
                            value={product}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                ))}
                <form onSubmit={handleSubmitCreate} className="space-y-4">
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Create Transaction'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
};

export default CreateTransactionPage;
