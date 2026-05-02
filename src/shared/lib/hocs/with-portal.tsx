import type { ComponentType } from "react";
import { createPortal } from "react-dom";

export function withPortal<P extends object>(Component: ComponentType<P>) {
  return function ComponentWrapper(props: P) {
    return createPortal(
      <Component {...props} />,
      document.getElementById("modal-portal")!,
    );
  };
}
