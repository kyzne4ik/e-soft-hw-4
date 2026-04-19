import { ChevronRight } from "@/shared/ui/icons";
import styles from "./product-list-header.module.css";

interface ProductListHeaderProps {
  productsCount: number;
  sortValue?: string;
  onSortChange?: (value: string) => void;
}

export const ProductListHeader = ({
  productsCount,
  sortValue,
  onSortChange,
}: ProductListHeaderProps) => {
  return (
    <div className={styles.header}>
      <span className={styles.count}>{productsCount} products</span>

      <div className={styles.sortWrapper}>
        <span className={styles.sortLabel}>Sort by:</span>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={sortValue}
            onChange={(e) => onSortChange?.(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <div className={styles.selectIcon}>
            <ChevronRight width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
