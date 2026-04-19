import type { Product } from "~entities/product";

export interface GetProductsParams {
  category?: string;
}

export interface ProductsResponse {
  products: Product[];
}
