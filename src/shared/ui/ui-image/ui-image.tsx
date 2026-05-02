import { classNames } from "@/shared/lib/classNames";
import type { HTMLAttributes } from "react";

export function UiImage({
  className = "",
  ...props
}: HTMLAttributes<HTMLImageElement>) {
  return <img {...props} className={classNames(className)} />;
}
