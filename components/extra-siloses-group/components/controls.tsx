"use client";

import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useUnit } from "effector-react";

import { externalSilosesModel } from "@/stores";
import { externalSiloses } from "@/config";
import { cn } from "@/utils";

import { ThresholdInput } from "./threshold-input";
import { ModeSelector } from "./mode-selector.";

export function Controls({
  relatedSilo,
}: {
  relatedSilo: ValueOf<typeof externalSiloses>;
}) {
  const isPending = useUnit(externalSilosesModel.$isPending);
  return (
    <section>
      <ThresholdInput disabled={isPending} relatedSilo={relatedSilo} />
      <ModeSelector
        className={cn(isPending && "pointer-events-none cursor-not-allowed")}
        relatedSilo={relatedSilo}
      />
    </section>
  );
}
