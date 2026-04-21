import { UiButton } from "../ui-button";
import styles from "./ui-empty-cart.module.css";

type UiEmptyCartProps = {
  onContinueShopping?: () => void;
}

export const UiEmptyCart = ({ onContinueShopping }: UiEmptyCartProps) => {
  return (
    <div className={styles.emptyCart}>
      <p className={styles.text}>Your cart is empty</p>
      <UiButton
        className={styles.button}
        variant="primary"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </UiButton>
    </div>
  );
};
