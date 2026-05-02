import { Trash } from "~shared/ui/icons";
import styles from "./cart-item.module.css";

type CartItemProps = {
  image: string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export const CartItem = ({
  image,
  brand,
  model,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <img src={image} alt={model} className={styles.image} />

      <div className={styles.info}>
        <p className={styles.brand}>{brand}</p>
        <h3 className={styles.model}>{model}</h3>

        <div className={styles.controls}>
          <div className={styles.counter}>
            <button
              className={`${styles.actionButton} ${styles.minusButton}`}
              onClick={onDecrease}
            >
              —
            </button>
            <span className={styles.count}>{quantity}</span>
            <button
              className={`${styles.actionButton} ${styles.plusButton}`}
              onClick={onIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.removeButton} onClick={onRemove}>
          <Trash color="#D4183D" />
        </button>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
};
