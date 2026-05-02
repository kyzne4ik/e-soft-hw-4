import { useStrictContext } from "@/shared/lib/hooks/react";
import { formStateContext } from "./context";
import type { FormStateContextType } from "./types";

export function useFormStateContext<T, D = unknown>() {
  return useStrictContext(formStateContext) as FormStateContextType<T, D>;
}
