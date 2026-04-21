import type { ProductDto } from "../contracts/products.contract";

export const productsService = {
  async getProducts(params?: { category: string }): Promise<ProductDto[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const { products } = await import("../../../data/products.ts");

      let filteredProducts = [...products];

      if (params?.category) {
        filteredProducts = filteredProducts.filter(
          (p) => p.category === params.category,
        );
      }

      return filteredProducts;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },

  async getProductById(id: string): Promise<ProductDto | null> {
    try {
      const { products } = await import("../../../data/products.ts");
      const searchedProducts = products.find(
        (p) => p.id.toString() === id,
      ) as ProductDto;

      return searchedProducts || null;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  },
};
