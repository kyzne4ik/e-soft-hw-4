import type { ReactNode, HTMLAttributes, DetailedHTMLProps } from "react";

import type { Mods } from "@/shared/lib/classNames";

import css from "./flex.module.css";
import { classNames } from "@/shared/lib/classNames";

export type FlexJustify = "end" | "start" | "center" | "between";
export type FlexAlign = "end" | "start" | "center";
export type FlexDirection = "row" | "column";
export type FlexGap =
  | "2"
  | "4"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24"
  | "26"
  | "28"
  | "32"
  | "42"
  | "48"
  | "54";

const justifyClasses: Record<FlexJustify, string> = {
  end: css.justify_end,
  start: css.justify_start,
  center: css.justify_center,
  between: css.justify_between,
};

const alignClasses: Record<FlexAlign, string> = {
  end: css.align_end,
  start: css.align_start,
  center: css.align_center,
};

const directionClasses: Record<FlexDirection, string> = {
  row: css.direction_row,
  column: css.direction_column,
};

const gapClasses: Record<FlexGap, string> = {
  2: css.gap2,
  4: css.gap4,
  6: css.gap6,
  8: css.gap8,
  10: css.gap10,
  12: css.gap12,
  16: css.gap16,
  20: css.gap20,
  24: css.gap24,
  26: css.gap26,
  28: css.gap28,
  32: css.gap32,
  42: css.gap42,
  48: css.gap48,
  54: css.gap54,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  gap?: FlexGap;
  max?: boolean;
  align?: FlexAlign;
  className?: string;
  flexFull?: boolean;
  children: ReactNode;
  justify?: FlexJustify;
  direction?: FlexDirection;
}

export const Flex = (props: FlexProps) => {
  const {
    gap,
    max,
    children,
    flexFull,
    className,
    align = "center",
    justify = "start",
    direction = "row",
    ...leftProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [css.max]: max,
    [css.flexFull]: flexFull,
  };

  return (
    <div className={classNames(css.wrapper, mods, classes)} {...leftProps}>
      {children}
    </div>
  );
};
