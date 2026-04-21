import { useState, useMemo, useEffect } from "react";
import { productsService } from "~shared/api/modules/products.service";
import type { ProductDto } from "~shared/api/contracts/products.contract";

type UseProductFilters = {
  brand: string;
  minPrice: number;
  maxPrice: number;
};

type UseProductOptions = {
  category?: string;
  filters: UseProductFilters;
};

export const useProduct = ({ category = "tv", filters }: UseProductOptions) => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("price-low");

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await productsService.getProducts({ category });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, [category]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (filters.brand && p.make !== filters.brand) return false;
        if (p.price < filters.minPrice) return false;
        if (p.price > filters.maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
      });
  }, [products, filters, sortBy]);

  return {
    products: filteredProducts,
    isLoading,
    sortBy,
    setSortBy,
  };
};
