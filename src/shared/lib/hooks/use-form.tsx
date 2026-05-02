import { type FormEvent, useState } from "react";

export type SubmitHandler<T> = (
  data: T,
  event: FormEvent<HTMLFormElement>,
) => void | Promise<void>;

export type UseFormReturn<T> = {
  formData: FormData | null;
  handleSubmit: (
    onSubmit: SubmitHandler<T>,
  ) => (event: FormEvent<HTMLFormElement>) => void;
};

export function useForm<T>(): UseFormReturn<T> {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit =
    (onSubmit: SubmitHandler<T>) =>
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries()) as unknown as T;

      setFormData(formData);
      await onSubmit(data, event);
    };

  return {
    formData,
    handleSubmit,
  };
}
