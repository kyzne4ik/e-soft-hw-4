import { ProductCard, useProduct } from "~entities/product";
import { ProductListHeader } from "~features/product-sort";
import { useContainer } from "~shared/lib/context/container";
import styles from "./product-list.module.css";

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            count={cart[product.id.toString()] || 0}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
};
