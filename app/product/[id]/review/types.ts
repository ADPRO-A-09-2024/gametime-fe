export interface Product {
    id: string;
    name: string;
    price: string;
    rating: string;
    [key: string]: any;
}

export interface Review {
    id: string;
    content: string;
    rating: string;
    author: {
        email: string;
    };
    [key: string]: any;
}
