import { Cart, User } from "~shared/ui/icons";
import { UiButton } from "~shared/ui/ui-button";
import styles from "./header.module.css";

type CategoryType = "tv" | "phone" | "laptop" | "cart";

type HeaderProps = {
  cartItemsCount?: number;
  activeCategory?: CategoryType;
  onCategoryChange?: (category: CategoryType) => void;
}

const categories = [
  { id: "tv", label: "TV" },
  { id: "phone", label: "Phone" },
  { id: "laptop", label: "Laptop" },
];

export const Header = ({
  cartItemsCount = 0,
  activeCategory = "tv",
  onCategoryChange,
}: HeaderProps) => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a
            href="/tv"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              onCategoryChange?.("tv");
            }}
          >
            TechStore
          </a>

          <div className={styles.rightMobile}>
            <UiButton
              variant="transparent"
              className={styles.iconButton}
              onClick={() => onCategoryChange?.("cart")}
            >
              <Cart width={24} height={24} />
              {cartItemsCount > 0 && (
                <span className={styles.cartBadge}>{cartItemsCount}</span>
              )}
            </UiButton>
            <UiButton variant="transparent" className={styles.iconButton}>
              <User width={24} height={24} />
            </UiButton>
          </div>
        </div>

        <nav className={styles.nav}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.navLink} ${
                activeCategory === cat.id ? styles.navLinkActive : ""
              }`}
              onClick={() => onCategoryChange?.(cat.id as CategoryType)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <div className={styles.right}>
          <UiButton
            variant="transparent"
            className={styles.iconButton}
            onClick={() => onCategoryChange?.("cart")}
          >
            <Cart width={24} height={24} />
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </UiButton>
          <UiButton variant="transparent" className={styles.iconButton}>
            <User width={24} height={24} />
          </UiButton>
        </div>
      </div>
    </header>
  );
};
