// lib/products.ts
import axios from 'axios';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image_url: string;
    created_at: string;
    updated_at: string;
}

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await axios.get('http://localhost:3001/shoes'); // Ganti URL ini dengan URL API kamu
        const result = response.data;

        if (result.status === 'success' && Array.isArray(result.data)) {
            return result.data as Product[];
        } else {
            console.error('Unexpected response format:', result);
            return [];
        }
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}


export async function getProduct(id: number): Promise<Product | null> {
    try {
        const response = await axios.get(`http://localhost:3001/shoes/${id}`); // Ganti dengan URL API yang sesuai
        const result = response.data;

        if (result.status === 'success' && result.data) {
            return result.data as Product;
        } else {
            console.error('Unexpected response format:', result);
            return null;
        }
    } catch (error) {
        console.error(`Failed to fetch product with ID ${id}:`, error);
        return null;
    }
}