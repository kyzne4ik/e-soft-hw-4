export type ProductCategory = "tv" | "phone" | "laptop";

export type Product = {
  id: number;
  category: ProductCategory;
  make: string;
  model: string;
  price: number;
  images: string[];
  isSpecialOffer?: boolean;
  brand: string;
}
