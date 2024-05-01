import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { cn } from "@/utils";
import { primarySiloses } from "@/config";

interface SelectSiloButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  relatedSilo: ValueOf<typeof primarySiloses>;
}

export function SelectSiloButton({
  className,
  relatedSilo,
  ...props
}: SelectSiloButtonProps) {
  return (
    <button
      type="button"
      className={cn("btn btn-square mx-auto block mb-2", className)}
      {...props}
    />
  );
}
