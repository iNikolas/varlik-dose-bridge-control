import React from "react";

import { cn } from "@/utils";

import { PipeProps } from "./types";

export function Pipe({ className, ...props }: PipeProps) {
  return (
    <section
      className={cn("absolute bg-warning w-20 h-2 -z-10", className)}
      {...props}
    />
  );
}
