import { persistStorage } from "~shared/lib/persist-storage";
import type { Cart } from "./types";

const CART_STORAGE_KEY = "cart_storage";

export const cartRepository = {
  async loadCart() {
    return await persistStorage.getItemSafe<Cart | undefined>(
      CART_STORAGE_KEY,
      undefined,
    );
  },
  async saveCart(cartData: Cart) {
    return await persistStorage.setItemSafe(
      CART_STORAGE_KEY,
      JSON.stringify(cartData),
    );
  },
  async clearCart() {
    await persistStorage.deleteItemSafe(CART_STORAGE_KEY);
  },
};
