'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductSearchPage: React.FC = () => {
    const [searchType, setSearchType] = useState('NAME');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();

        // Construct the URL
        const url = `https://transaction-p5zxnxph7q-ew.a.run.app/product/search/${searchType}/${searchTerm}`;

        // Fetch the data
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Search successful', data);
            // Handle the fetched data
        } else {
            console.log('Search failed');
        }
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
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Want to add a new product?{' '}
                        <Link href="/add-product">
                            <span className="font-medium text-indigo-600 hover:text-indigo-500">Add Product</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductSearchPage;