import type { ButtonHTMLAttributes, ReactNode } from "react";
import css from "./ui-button.module.css";
import { Spinner } from "../icons";
import { classNames } from "@/shared/lib/classNames";

type ButtonVariant = "primary" | "secondary" | "transparent" | "danger";

type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: css.primary,
  secondary: css.secondary,
  transparent: css.transparent,
  danger: css.danger,
};

export const UiButton = ({
  variant = "primary",
  isLoading,
  children,
  className = "",
  ...props
}: UiButtonProps) => {
  return (
    <button
      className={classNames(css.button, {}, [variants[variant], className])}
      {...props}
    >
      {!isLoading ? (
        children
      ) : (
        <Spinner width={24} height={24} className={css.spinner} />
      )}
    </button>
  );
};
