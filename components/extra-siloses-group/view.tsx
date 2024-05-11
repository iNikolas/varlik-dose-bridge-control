"use client";

import React from "react";
import { useUnit } from "effector-react";

import { primarySilosesModel } from "@/stores";
import { externalSiloses, screws } from "@/config";
import { cn } from "@/utils";

import { SiloWithScrewConveyor } from "./components";
import { ExtraSilosesGroupProps } from "./types";

export function ExtraSilosesGroup({
  className,
  ...props
}: ExtraSilosesGroupProps) {
  const primarySiloses = useUnit(primarySilosesModel.$siloses);

  return (
    <section className={cn("flex min-w-max max-w-max", className)} {...props}>
      <SiloWithScrewConveyor
        siloName={externalSiloses.s202}
        screwName={screws.sc202_1}
        isRunning={false}
        isSelected={Object.values(primarySiloses).some(
          (primarySilo) => primarySilo.selection === externalSiloses.s202,
        )}
      />
      <SiloWithScrewConveyor
        className="-translate-y-12 -left-[30%]"
        siloName={externalSiloses.s204}
        screwName={screws.sc204_1}
        isRunning={false}
        isSelected={Object.values(primarySiloses).some(
          (primarySilo) => primarySilo.selection === externalSiloses.s204,
        )}
      />
    </section>
  );
}
