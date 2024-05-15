import React from "react";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import { AxiosError } from "axios";

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

export function parseSiloNumber(name: string): number {
  return parseInt(name.replace(/\D/g, ""), 10);
}

export function extractErrorMessage(error: AxiosError | Error): string {
  if (error instanceof AxiosError) {
    return error.response?.data.message ?? error.message;
  }

  return error.message;
}
