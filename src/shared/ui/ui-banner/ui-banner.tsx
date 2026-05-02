import { Close } from "~shared/ui/icons";
import { UiButton } from "~shared/ui/ui-button";
import css from "./ui-banner.module.css";
import type { HTMLAttributes, ReactNode } from "react";
import { classNames as clsx } from "@/shared/lib/classNames";

export type UiBannerProps = HTMLAttributes<HTMLDivElement> & {
  variant?: BannerVariant;
  title?: string;
  onClose?: () => void;
  classNames?: {
    banner?: string;
    banner__inner?: string;
    banner__close?: string;
    banner__title?: string;
  };
};

type BannerVariant = "danger" | "weather";

const variants: Record<BannerVariant, string> = {
  danger: css.danger,
  weather: css.weather,
};

export function UiBanner({
  variant = "danger",
  title,
  onClose,
  classNames,
  children,
  ...props
}: UiBannerProps) {
  return (
    <div
      className={clsx(css.banner, {}, [classNames?.banner, variants[variant]])}
      {...props}
    >
      <div className={clsx(css.banner__inner, {}, [classNames?.banner__inner])}>
        <UiButton
          variant="transparent"
          className={clsx(css.closeButton, {}, [classNames?.banner__close])}
          onClick={onClose}
          aria-label="Close banner"
        >
          <Close width={20} height={20} color="var(--primary-text)" />
        </UiButton>
        {title && (
          <p className={clsx(css.title, {}, [classNames?.banner__title])}>
            {title}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

UiBanner.Header = function UiBannerHeader({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(css.header, {}, [className])} {...props}>
      {children}
    </div>
  );
};

UiBanner.Body = function UiBannerBody({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(css.body, {}, [className])} {...props}>
      {children}
    </div>
  );
};

UiBanner.Footer = function UiBannerFooter({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(css.footer, {}, [className])} {...props}>
      {children}
    </div>
  );
};
