import { ProductFilters } from '~features/product-filters';
import styles from './product-filters-sidebar.module.css';

interface ProductFiltersSidebarProps {
  onApply: (filters: {
    brand: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export const ProductFiltersSidebar = ({ onApply }: ProductFiltersSidebarProps) => {
  const brands = ['Samsung', 'LG', 'Sony', 'Apple', 'Google', 'TCL', 'Hisense'];

  return (
    <div className={styles.sidebarSection}>
      <ProductFilters brands={brands} onApply={onApply} />
    </div>
  );
};
