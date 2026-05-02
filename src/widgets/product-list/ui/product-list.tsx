import { useState, useMemo } from "react";
import { ProductCard, useProduct } from "~entities/product";
import { ProductListHeader } from "~features/product-sort";
import { useContainer } from "~shared/lib/context/container";
import { UiPagination } from "~shared/ui/ui-pagination";
import styles from "./product-list.module.css";

const ITEMS_PER_PAGE = 6;

type ProductListProps = {
  category?: string;
  filters: {
    brand: string;
    minPrice: number;
    maxPrice: number;
  };
};

export const ProductList = ({ category = "tv", filters }: ProductListProps) => {
  const { cart, updateQuantity } = useContainer();
  const { products, isLoading, sortBy, setSortBy } = useProduct({
    category,
    filters,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [prevDeps, setPrevDeps] = useState({ category, filters, sortBy });

  if (
    prevDeps.category !== category ||
    prevDeps.filters !== filters ||
    prevDeps.sortBy !== sortBy
  ) {
    setPrevDeps({ category, filters, sortBy });
    setCurrentPage(1);
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(start, start + ITEMS_PER_PAGE);
  }, [products, currentPage]);

  const handleAddToCart = (id: number) => {
    updateQuantity(id.toString(), 1);
  };

  const handleRemoveFromCart = (id: number) => {
    updateQuantity(id.toString(), -1);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  return (
    <div className={styles.productList}>
      <ProductListHeader
        productsCount={products.length}
        sortValue={sortBy}
        onSortChange={setSortBy}
      />
      <div className={styles.grid}>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            count={cart[product.id.toString()] || 0}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <UiPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
