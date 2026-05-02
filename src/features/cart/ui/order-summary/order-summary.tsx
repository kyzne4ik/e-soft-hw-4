import styles from "./order-summary.module.css";

type OrderSummaryProps = {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout?: () => void;
  onContinueShopping?: () => void;
}

export const OrderSummary = ({
  subtotal,
  tax,
  total,
  onCheckout,
  onContinueShopping,
}: OrderSummaryProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Order Summary</h2>

      <div className={styles.rows}>
        <div className={styles.row}>
          <span className={styles.label}>Subtotal</span>
          <span className={styles.value}>{formatCurrency(subtotal)}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Tax (8%)</span>
          <span className={styles.value}>{formatCurrency(tax)}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Shipping</span>
          <span className={`${styles.value} ${styles.shippingValue}`}>
            Calculated at checkout
          </span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>{formatCurrency(total)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.checkoutButton} onClick={onCheckout}>
          Proceed to Checkout
        </button>
        <button className={styles.continueButton} onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
