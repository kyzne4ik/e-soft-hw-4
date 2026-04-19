import type {
  ProductsResponse,
  GetProductsParams,
} from "../contracts/products.contract";

export const productsService = {
  async getProducts(params?: GetProductsParams): Promise<ProductsResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const { products } = await import("../../../data/products.ts");

      let filteredProducts = [...products];

      if (params?.category) {
        filteredProducts = filteredProducts.filter(
          (p) => p.category === params.category,
        );
      }

      return { products: filteredProducts };
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return { products: [] };
    }
  },
};
