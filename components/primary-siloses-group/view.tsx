"use client";

import React from "react";
import { useUnit } from "effector-react";

import { instrumentsModel, primarySilosesModel } from "@/stores";
import { primarySiloses, rotaryValves, screws } from "@/config";
import { cn } from "@/utils";

import { SiloWithScrewConveyor, SiloWithRotaryValve } from "./components";
import { PrimarySilosesGroupProps } from "./types";

export function PrimarySilosesGroup({
  className,
  ...props
}: PrimarySilosesGroupProps) {
  const siloses = useUnit(primarySilosesModel.$siloses);
  const {
    isScrewConveyor206Running,
    isScrewConveyor207Running,
    isRotaryValve208Running,
  } = useUnit(instrumentsModel.$state);

  return (
    <section
      className={cn("flex gap-4 min-w-max max-w-max", className)}
      {...props}
    >
      <SiloWithScrewConveyor
        className="relative left-[36%]"
        isRunning={isScrewConveyor206Running}
        isSelected={Boolean(siloses.S206.selection)}
        siloName={primarySiloses.s206}
        screwName={screws.sc206}
      />
      <SiloWithRotaryValve
        isRunning={isScrewConveyor207Running}
        isSelected={Boolean(siloses.S207.selection)}
        rotaryValveName={rotaryValves.rv207}
        siloName={primarySiloses.s207}
      />
      <SiloWithRotaryValve
        isRunning={isRotaryValve208Running}
        isSelected={Boolean(siloses.S208.selection)}
        rotaryValveName={rotaryValves.rv208}
        siloName={primarySiloses.s208}
      />
    </section>
  );
}
