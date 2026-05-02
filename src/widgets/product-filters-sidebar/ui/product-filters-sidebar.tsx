import { useProductBrands } from "~entities/product";
import { ProductFilters } from "~features/product-filters";
import styles from "./product-filters-sidebar.module.css";

type ProductFiltersSidebarProps = {
  category: string;
  onApply: (filters: {
    brand: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export const ProductFiltersSidebar = ({
  category,
  onApply,
}: ProductFiltersSidebarProps) => {
  const { brands, isLoading } = useProductBrands(category);

  if (isLoading) return null;

  return (
    <div className={styles.sidebarSection}>
      <ProductFilters brands={brands} onApply={onApply} />
    </div>
  );
};
