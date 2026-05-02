import { type CSSProperties } from "react";

import css from "./ui-skeleton.module.css";
import { classNames } from "@/shared/lib/classNames";

export interface UiSkeletonProps {
  border?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const UiSkeleton = ({
  width,
  height,
  border,
  className,
}: UiSkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div style={styles} className={classNames(css.wrapper, {}, [className])} />
  );
};
