'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateProductPage: React.FC = () => {
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [category, setCategory] = useState(''); 
    const [price, setPrice] = useState(''); 

    const createProduct = (event: React.FormEvent) => {
        event.preventDefault();

        // Construct the URLs
        const urlCreate = "http://localhost:8080/product/create/";

        // Fetch the data
        const dataCreate = fetch(urlCreate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "sellerId": `${}`,
                "name": `${name}`,
                "description": `${description}`,
                "category": `${category}`,
                "price": `${price}`
            })
        }).then(response => response.json());

        // Do something with the data
        console.log(dataCreate);
    };
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Create Product</h2>
                <form onSubmit={createProduct}>
                    <div className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            required
                            type="text"
                            placeholder="Enter product name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            required
                            type="text"
                            placeholder="Enter product description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="category">Category</Label>
                        <Input
                            id="category"
                            required
                            type="text"
                            placeholder="Enter product category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-8">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="ratingMoreThan"
                            type="number"
                            placeholder="Enter product price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProductPage;