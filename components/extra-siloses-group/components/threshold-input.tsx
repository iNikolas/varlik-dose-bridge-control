"use client";

import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses } from "@/config";
import { cn } from "@/utils";

import { useInputEvents } from "../utils";

interface ThresholdInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  relatedSilo: ValueOf<typeof externalSiloses>;
}

export function ThresholdInput({
  relatedSilo,
  className,
  ...props
}: ThresholdInputProps) {
  const events = useInputEvents(relatedSilo);

  return (
    <input
      type="text"
      placeholder="Вага, кг"
      className={cn("input input-bordered input-xs w-full", className)}
      {...events}
      {...props}
    />
  );
}
