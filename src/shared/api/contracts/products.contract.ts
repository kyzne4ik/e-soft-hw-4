export type ProductCategory = "tv" | "phone" | "laptop";

export type ProductDto = {
  id: number;
  category: ProductCategory;
  make: string;
  model: string;
  price: number;
  images: string[];
  isSpecialOffer?: boolean;
  brand: string;
};

export type GetProductsParams = {
  category?: string;
};
