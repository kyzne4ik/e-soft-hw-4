import type { Dispatch, SetStateAction } from "react";
import { createStrictContext, useStrictContext } from "../../hooks/react";

type CartDto = Record<string, number>;

type PageTypeDto = "tv" | "phone" | "laptop" | "cart";

type ContainerDeps = {
  pageType: PageTypeDto;
  cart: CartDto;
  setPageType: Dispatch<SetStateAction<PageTypeDto>>;
  setCart: Dispatch<SetStateAction<CartDto>>;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
};

export const containerContext = createStrictContext<ContainerDeps>();

export function useContainer() {
  const ctx = useStrictContext(containerContext);

  return ctx;
}
