export const persistStorage = {
  getItemSafe: async <T>(key: string, defaultValue: T): Promise<T> => {
    try {
      const value = sessionStorage.getItem(key);
      if (!value) return defaultValue;

      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    } catch {
      return defaultValue;
    }
  },
  setItemSafe: async (key: string, value: unknown): Promise<void> => {
    try {
      const stringValue =
        typeof value === "string" ? value : JSON.stringify(value);
      sessionStorage.setItem(key, stringValue);
    } catch (error) {
      console.error(`Web storage error for key ${key}:`, error);
    }
  },

  deleteItemSafe: async (key: string): Promise<void> => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Web storage error deleting ${key}:`, error);
    }
  },
};
