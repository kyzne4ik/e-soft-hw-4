import { useState } from "react";
import { Header, type CategoryType } from "~widgets/header";
import { Footer } from "~widgets/footer";
import { ProductList } from "~widgets/product-list";
import { ProductFiltersSidebar } from "~widgets/product-filters-sidebar";
import { RegistrationBannerWidget } from "~widgets/registration-banner";
import styles from "./home-page.module.css";

export const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("tv");
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: 0,
    maxPrice: 5000,
  });

  return (
    <div className={styles.page}>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <ProductFiltersSidebar category={activeCategory} onApply={setFilters} />
          <RegistrationBannerWidget />
        </aside>
        <section className={styles.content}>
          <ProductList category={activeCategory} filters={filters} />
        </section>
      </main>
      <Footer />
    </div>
  );
};
