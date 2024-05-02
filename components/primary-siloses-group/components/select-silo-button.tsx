"use client";

import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { cn } from "@/utils";
import { externalSiloses, primarySiloses } from "@/config";

import { useSiloButtonSelection } from "../utils";

interface SelectSiloButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  relatedSilo: ValueOf<typeof primarySiloses>;
  children: ValueOf<typeof externalSiloses>;
}

export function SelectSiloButton({
  className,
  relatedSilo,
  children: selection,
  ...props
}: SelectSiloButtonProps) {
  const { selected, events } = useSiloButtonSelection(relatedSilo, selection);

  return (
    <button
      type="button"
      className={cn(
        "btn btn-square mx-auto block mb-2",
        selected && "btn-success",
        className,
      )}
      {...events}
      {...props}
    >
      {selection}
    </button>
  );
}
