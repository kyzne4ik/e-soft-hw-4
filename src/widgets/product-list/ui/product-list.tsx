import { useState, useMemo, useEffect } from 'react';
import { ProductCard, type Product } from '~entities/product';
import { ProductListHeader } from '~features/product-sort';
import { productsService } from '~shared/api/modules/products.service';
import styles from './product-list.module.css';

interface ProductListProps {
  category?: string;
  filters: {
    brand: string;
    minPrice: number;
    maxPrice: number;
  };
}

export const ProductList = ({ category = "tv", filters }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState<Record<number, number>>({ 8: 2 });

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await productsService.getProducts({ category });
      setProducts(data.products);
      setIsLoading(false);
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
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [products, filters, sortBy]);

  const handleAddToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  return (
    <div className={styles.productList}>
      <ProductListHeader
        productsCount={filteredProducts.length}
        sortValue={sortBy}
        onSortChange={setSortBy}
      />

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            count={cart[product.id] || 0}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
};
