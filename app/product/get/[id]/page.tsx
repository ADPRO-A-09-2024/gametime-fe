'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import api from './api';

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
}

const ProductPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[3];

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get(`product/get/${id}`)
      .then((response: { data: { id: any; name: any; description: any; category: any; price: any; }; }) => {
        setProduct({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            category: response.data.category,
            price: response.data.price
        })
      })
  });

  if (!product) {
    return <div>Loading...</div>;
  }

  const reviewUrl = `/product/${product.id}/review`

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
    <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Product</h2>
        <div className="space-y-4">
            <div className="mb-4">
                <Label htmlFor="name">name</Label>
                <Input
                    id="name"
                    value={product.name}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    value={product.description}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <Label htmlFor="category">Category</Label>
                <Input
                    id="category"
                    value={product.category}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-8">
                <Label htmlFor="price">Price</Label>
                <Input
                    id="price"
                    value={product.price}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
        <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
                See review{' '}
                <Link href={reviewUrl}>
                    <span className="font-medium text-indigo-600 hover:text-indigo-500">Review</span>
                </Link>
            </p>
        </div>
    </div>
</div>
  );
};

export default ProductPage;

