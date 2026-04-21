import type { ReactNode } from "react";
import styles from "./ui-badge.module.css";

type BadgeVariant = "red" | "white";

type UiBadgeProps = {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  red: styles.red,
  white: styles.white,
};

export const UiBadge = ({
  variant = "red",
  children,
  className = "",
}: UiBadgeProps) => {
  return (
    <div className={`${styles.badge} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
