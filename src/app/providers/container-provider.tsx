import { cartRepository } from "~entities/cart";
import { useState, useEffect, type ReactNode } from "react";
import { containerContext } from "~shared/lib/context/container";

type PageType = "tv" | "phone" | "laptop" | "cart";
type Cart = Record<string, number>;

export function Container({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [pageType, setPageType] = useState<PageType>("tv");

  useEffect(() => {
    cartRepository.loadCart().then((saved) => {
      console.log(saved);
      if (saved) setCart(saved);
    });
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;

      if (newQty <= 0) {
        const next = { ...prev };
        delete next[id];
        cartRepository.saveCart(next);
        return next;
      }

      const data = { ...prev, [id]: newQty };

      cartRepository.saveCart(data);
      return data;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      cartRepository.saveCart(next);
      return next;
    });
  };

  const value = {
    cart,
    pageType,
    setCart,
    setPageType,
    updateQuantity,
    removeFromCart,
  };

  return (
    <containerContext.Provider value={value}>
      {children}
    </containerContext.Provider>
  );
}
