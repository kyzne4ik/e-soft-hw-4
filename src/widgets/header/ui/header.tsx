import { Cart, User } from "@/shared/ui/icons";
import { UiButton } from "@/shared/ui/ui-button";
import styles from "./header.module.css";

interface HeaderProps {
  cartItemsCount?: number;
}

export const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            TechStore
          </a>
          <nav className={styles.nav}>
            <a
              href="/tv"
              className={`${styles.navLink} ${styles.navLinkActive}`}
            >
              TV
            </a>
            <a href="/phone" className={styles.navLink}>
              Phone
            </a>
            <a href="/laptop" className={styles.navLink}>
              Laptop
            </a>
          </nav>
        </div>

        <div className={styles.right}>
          <UiButton variant="transparent" className={styles.iconButton}>
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
