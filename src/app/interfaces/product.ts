export interface Product {
    
    id: number;
    title: String;
    description: String;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: String;
    category: String;
    createdAt: String;
    thumbnail : String;
    images : string[];
    quantity ?: number;
}
