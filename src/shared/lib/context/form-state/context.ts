import {
  createStrictContext,
} from "@/shared/lib/hooks/react";
import type { FormStateContextType } from "./types";

export const formStateContext = createStrictContext<FormStateContextType<unknown, unknown>>();
