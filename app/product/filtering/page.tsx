// /app/product/filter/page.tsx

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FilterPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Product Filter</h2>
                <form>
                    <div className="mb-4">
                        <Label htmlFor="priceLessThan">Price Less Than</Label>
                        <Input
                            id="priceLessThan"
                            type="number"
                            placeholder="Enter maximum price"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="priceMoreThan">Price More Than</Label>
                        <Input
                            id="priceMoreThan"
                            type="number"
                            placeholder="Enter minimum price"
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