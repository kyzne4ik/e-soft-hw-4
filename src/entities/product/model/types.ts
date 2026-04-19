export type ProductCategory = "tv" | "phone" | "laptop";

export interface Product {
  id: number;
  category: ProductCategory;
  make: string;
  model: string;
  price: number;
  images: string[];
  isSpecialOffer?: boolean;
  brand: string;
}
