import type { SubmitHandler, UseFormReturn } from "@/shared/lib/hooks/use-form";

export type FormStateContextType<T, D = unknown> = {
  form: UseFormReturn<T>;
  isLoading: boolean;
  onSubmit: SubmitHandler<T>;
  data?: D;
};
