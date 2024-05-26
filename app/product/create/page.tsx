'use client'

import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import api from './api';

const CreateProductPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const price = formData.get('price') as string;

    await api.post('/product/create', {
        sellerId: localStorage.getItem('idUser'),
        name, description, category, price 
        }).then(response => {
            window.location.href = `/product/get/${response.data.id}`;
        })
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
        <Card className="mx-auto max-w-lg w-1/3">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">
                    Create Product
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmitCreate} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" required type="text" name='name' />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" required type="text" name='description' />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" required type="text" name='category' />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" required type="number" name='price' />
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Create'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
};

export default CreateProductPage;
