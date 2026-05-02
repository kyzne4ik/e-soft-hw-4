import type { InputHTMLAttributes } from "react";
import css from "./ui-input.module.css";
import { classNames as clsx } from "@/shared/lib/classNames";

type InputVariant = "primary" | "secondary";

const variants: Record<InputVariant, string> = {
  primary: css.primary,
  secondary: css.secondary,
};

export type UiInputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

export function UiInput({
  variant = "primary",
  className = "",
  ...props
}: UiInputProps) {
  return (
    <input className={clsx(className, {}, [variants[variant]])} {...props} />
  );
}

export type UiInputWithErrorProps = Omit<UiInputProps, "className"> & {
  error?: string;
  classNames?: {
    container?: string;
    input?: string;
    error__text?: string;
  };
};

export function UiInputWithError({
  error,
  classNames,
  ...props
}: UiInputWithErrorProps) {
  return (
    <div className={clsx(css.container, {}, [classNames?.container])}>
      <UiInput {...props} className={classNames?.input} />
      {error && (
        <span className={clsx(css.error__text, {}, [classNames?.error__text])}>
          {error}
        </span>
      )}
    </div>
  );
}
