import React from "react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyCommonPropsToChildren(
  children: React.ReactNode,
  commonProps: Record<string, unknown>,
) {
  return React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { ...child.props, ...commonProps })
      : child,
  );
}
