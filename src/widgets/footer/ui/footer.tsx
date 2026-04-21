import { UiButton } from "~shared/ui/ui-button";
import styles from "./footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.column}>
            <h3 className={styles.title}>About</h3>
            <nav className={styles.list}>
              <a href="/about" className={styles.link}>
                About Us
              </a>
              <a href="/careers" className={styles.link}>
                Careers
              </a>
              <a href="/press" className={styles.link}>
                Press
              </a>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Support</h3>
            <nav className={styles.list}>
              <a href="/contact" className={styles.link}>
                Contact
              </a>
              <a href="/faq" className={styles.link}>
                FAQ
              </a>
              <a href="/shipping" className={styles.link}>
                Shipping
              </a>
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Legal</h3>
            <nav className={styles.list}>
              <a href="/privacy" className={styles.link}>
                Privacy Policy
              </a>
              <a href="/terms" className={styles.link}>
                Terms of Service
              </a>
              <a href="/returns" className={styles.link}>
                Returns
              </a>
            </nav>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.title}>Newsletter</h3>
            <p className={styles.newsletterText}>
              Subscribe for exclusive deals
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
              <UiButton variant="primary" className={styles.button}>
                Subscribe
              </UiButton>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
