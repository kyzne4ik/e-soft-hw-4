import { useState } from "react";
import { Header } from "~widgets/header";
import { Footer } from "~widgets/footer";
import { ProductList } from "~widgets/product-list";
import { ProductFiltersSidebar } from "~widgets/product-filters-sidebar";
import { RegistrationBannerWidget } from "~widgets/registration-banner";
import { CartPage } from "~pages/cart";
import styles from "./app.module.css";
import { useContainer } from "@/shared/lib/context/container";
import { Container } from "./providers/container-provider";
import { WeatherWidget } from "@/widgets/weather";
import { TestButton } from "@/features/test-modal";

export default function App() {
  return (
    <Container>
      <BaseApp />
    </Container>
  );
}

function BaseApp() {
  const { pageType, setPageType, cart } = useContainer();

  const cartItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className={styles.page}>
      <Header
        cartItemsCount={cartItemsCount}
        activeCategory={pageType}
        onCategoryChange={(category) => setPageType(category)}
      />
      <Content />
      <Footer />
    </div>
  );
}

function Content() {
  const { pageType } = useContainer();

  const [filters, setFilters] = useState({
    brand: "",
    minPrice: 0,
    maxPrice: 5000,
  });

  if (pageType === "cart") {
    return (
      <main className={styles.main}>
        <CartPage />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <ProductFiltersSidebar
          key={pageType}
          category={pageType}
          onApply={setFilters}
        />
        <RegistrationBannerWidget />
        <WeatherWidget />
        <TestButton/>
      </aside>
      <section className={styles.content}>
        <ProductList key={pageType} category={pageType} filters={filters} />
      </section>
    </main>
  );
}
