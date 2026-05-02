import type { ReactNode } from "react";
import { formStateContext } from "./context";
import type { FormStateContextType } from "./types";

export function FormStateProvider<T, D = unknown>({
  children,
  value,
}: {
  children: (({ isLoading }: { isLoading?: boolean }) => ReactNode) | ReactNode;
  value: FormStateContextType<T, D>;
}) {
  const { isLoading } = value;
  return (
    <formStateContext.Provider value={value as FormStateContextType<unknown, unknown>}>
      {typeof children === "function" ? children({ isLoading }) : children}
    </formStateContext.Provider>
  );
}
