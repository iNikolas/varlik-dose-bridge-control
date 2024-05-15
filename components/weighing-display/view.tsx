"use client";

import React from "react";

import { cn } from "@/utils";

import { useCounterDigits, useWeighingError } from "./hooks";

export function WeighingDisplay() {
  const { highValue, lowValue, fractionValue, isPositive } = useCounterDigits();
  const { isBlinking, isError } = useWeighingError();

  return (
    <section
      className={cn(
        "countdown font-mono bg-neutral rounded-box text-neutral-content p-1 shadow-inner",
        isError && "text-error-content bg-warning",
        isError && isBlinking && "bg-error",
      )}
    >
      {!isPositive && "-"}
      <span style={highValue} />
      <span style={lowValue} />.<span style={fractionValue} /> кг
    </section>
  );
}
