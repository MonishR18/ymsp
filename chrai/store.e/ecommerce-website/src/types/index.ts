export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
}