import { useEffect } from "react";

export function useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: (event: KeyboardEvent | MouseEvent | Event) => void,
) {
  useEffect(() => {
    document.addEventListener(eventName, handler);

    return () => document.removeEventListener(eventName, handler);
  }, [handler, eventName]);
}
