import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import styles from "./ui-button.module.css";

type ButtonVariant = "primary" | "secondary" | "transparent" | "danger";

type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  transparent: styles.transparent,
  danger: styles.danger,
};

export const UiButton = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: UiButtonProps) => {
  return (
    <button
      className={clsx(styles.button, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
