'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FilterPage: React.FC = () => {
    const [priceLessThan, setPriceLessThan] = useState('');
    const [priceMoreThan, setPriceMoreThan] = useState('');
    const [ratingLessThan, setRatingLessThan] = useState('');
    const [ratingMoreThan, setRatingMoreThan] = useState('');

    const handleFilter = async (event: React.FormEvent) => {
        event.preventDefault();

        // Construct the URLs
        const urlPriceLess = `https://localhost:8080/product/filter/price/less/${priceLessThan}`;
        const urlPriceMore = `https://localhost:8080/product/filter/price/greater/${priceMoreThan}`;
        const urlRatingLess = `https://localhost:8080/product/filter/rating/less/${ratingLessThan}`;
        const urlRatingMore = `https://localhost:8080/product/filter/rating/greater/${ratingMoreThan}`;

        // Fetch the data
        const responsePriceLess = await fetch(urlPriceLess, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataPriceLess = await responsePriceLess.json();

        const responsePriceMore = await fetch(urlPriceMore, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataPriceMore = await responsePriceMore.json();

        const responseRatingLess = await fetch(urlRatingLess, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataRatingLess = await responseRatingLess.json();

        const responseRatingMore = await fetch(urlRatingMore, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataRatingMore = await responseRatingMore.json();

        // Do something with the data
        console.log(dataPriceLess, dataPriceMore, dataRatingLess, dataRatingMore);
    };
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Product Filter</h2>
                <form onSubmit={handleFilter}>
                    <div className="mb-4">
                        <Label htmlFor="priceLessThan">Price Less Than</Label>
                        <Input
                            id="priceLessThan"
                            type="number"
                            placeholder="Enter maximum price"
                            value={priceLessThan}
                            onChange={e => setPriceLessThan(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="priceMoreThan">Price More Than</Label>
                        <Input
                            id="priceMoreThan"
                            type="number"
                            placeholder="Enter minimum price"
                            value={priceMoreThan}
                            onChange={e => setPriceMoreThan(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="ratingLessThan">Rating Less Than</Label>
                        <Input
                            id="ratingLessThan"
                            type="number"
                            step="0.1"
                            placeholder="Enter maximum rating"
                            value={ratingLessThan}
                            onChange={e => setRatingLessThan(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-8">
                        <Label htmlFor="ratingMoreThan">Rating More Than</Label>
                        <Input
                            id="ratingMoreThan"
                            type="number"
                            step="0.1"
                            placeholder="Enter minimum rating"
                            value={ratingMoreThan}
                            onChange={e => setRatingMoreThan(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Apply Filters
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilterPage;