import { useState } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { ChevronRight } from "@/shared/ui/icons";
import styles from "./product-filters.module.css";

interface ProductFiltersProps {
  brands: string[];
  onApply?: (filters: {
    brand: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export const ProductFilters = ({ brands, onApply }: ProductFiltersProps) => {
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApply = () => {
    onApply?.({
      brand,
      minPrice: Number(minPrice) || 0,
      maxPrice: Number(maxPrice) || 5000,
    });
  };

  return (
    <div className={styles.filters}>
      <h2 className={styles.title}>Filters</h2>

      <div className={styles.section}>
        <span className={styles.label}>Brand</span>
        <div className={styles.selectWrapper}>
          <select
            className={styles.select}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select brand</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <div
            className={styles.selectIcon}
            style={{ transform: "translateY(-50%) rotate(90deg)" }}
          >
            <ChevronRight width={16} height={16} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Price Range</span>
        <div className={styles.priceInputs}>
          <input
            type="number"
            className={styles.input}
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            className={styles.input}
            placeholder="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <UiButton
        variant="primary"
        className={styles.applyButton}
        onClick={handleApply}
      >
        Apply Filters
      </UiButton>
    </div>
  );
};
