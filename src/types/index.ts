export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  description: string;
  featured?: boolean;
  discount?: number;
  new?: boolean;
  stock: number;
  specs?: Record<string, string>;
}

export type Category = 
  | 'electronics'
  | 'gaming'
  | 'accessories'
  | 'audio'
  | 'computers'
  | 'smartphones';

export interface CartItem {
  product: Product;
  quantity: number;
}