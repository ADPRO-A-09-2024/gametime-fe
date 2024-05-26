'use client'

import { useState } from 'react';
import api from './api';
import { Product } from './types';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductSearchPage: React.FC = () => {
    const [searchType, setSearchType] = useState('NAME');
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await api.get(`/product/search/${searchType}/${searchTerm}`);
        setProducts(response.data);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Product Search</h2>
                <form onSubmit={handleSearch}>
                    <div className="mb-4">
                        <Label htmlFor="searchType">Search Type</Label>
                        <select
                            id="searchType"
                            value={searchType}
                            onChange={e => setSearchType(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="NAME">Name</option>
                            <option value="CATEGORY">Category</option>
                            <option value="RATING">Rating</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="searchTerm">Search Term</Label>
                        <Input
                            id="searchTerm"
                            type="text"
                            placeholder="Enter search term"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </Button>
                    </div>
                </form>

                {products.map(product => (
                    <div key={product.id} className="p-4 mb-4 border border-gray-300 rounded">
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Rating: {product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSearchPage;