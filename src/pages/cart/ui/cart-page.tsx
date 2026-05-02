import { useEffect, useState } from "react";
import { CartItem } from "~entities/cart";
import { OrderSummary } from "~features/cart";
import { UiEmptyCart } from "~shared/ui/ui-empty-cart";
import { productsService } from "~shared/api/modules/products.service";
import { useContainer } from "~shared/lib/context/container";
import type { ProductDto } from "~shared/api/contracts/products.contract";
import styles from "./cart-page.module.css";

type CartItemWithData = ProductDto & {
  quantity: number;
};

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, setPageType } = useContainer();
  const [items, setItems] = useState<CartItemWithData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedInitially, setHasLoadedInitially] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      if (!hasLoadedInitially) {
        setIsLoading(true);
      }

      const cartIds = Object.keys(cart);

      const itemPromises = cartIds.map(async (id) => {
        const product = await productsService.getProductById(id);
        if (product) {
          return { ...product, quantity: cart[id] };
        }
        return null;
      });

      const results = (await Promise.all(itemPromises)).filter(
        (item): item is CartItemWithData => item !== null,
      );
      setItems(results);
      setIsLoading(false);
      setHasLoadedInitially(true);
    };

    fetchItems();
  }, [cart, hasLoadedInitially]);

  if (isLoading && !hasLoadedInitially) {
    return <div className={styles.loading}>Loading cart...</div>;
  }

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <UiEmptyCart onContinueShopping={() => setPageType("tv")} />
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.content}>
        <div className={styles.itemsList}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              image={item.images[0]}
              brand={item.brand}
              model={item.model}
              price={item.price * item.quantity}
              quantity={item.quantity}
              onIncrease={() => updateQuantity(item.id.toString(), 1)}
              onDecrease={() => updateQuantity(item.id.toString(), -1)}
              onRemove={() => removeFromCart(item.id.toString())}
            />
          ))}
        </div>
        <div className={styles.summary}>
          <OrderSummary
            subtotal={subtotal}
            tax={tax}
            total={total}
            onCheckout={() => console.log("Proceed to checkout")}
            onContinueShopping={() => setPageType("tv")}
          />
        </div>
      </div>
    </div>
  );
};
