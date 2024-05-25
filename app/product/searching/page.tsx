
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductSearchPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Product Search</h2>
                <form>
                    <div className="mb-4">
                        <Label htmlFor="productName">Product Name</Label>
                        <Input
                            id="productName"
                            type="text"
                            placeholder="Enter product name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="productRating">Product Rating</Label>
                        <Input
                            id="productRating"
                            type="text"
                            placeholder="Enter product rating"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-8">
                        <Label htmlFor="productCategory">Product Category</Label>
                        <Input
                            id="productCategory"
                            type="text"
                            placeholder="Enter product category"
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
