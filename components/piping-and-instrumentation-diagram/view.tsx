"use client";

import React from "react";
import { useGate } from "effector-react";

import { controllerModel } from "@/stores";
import { cn } from "@/utils";

import { ExtraSilosesGroup } from "../extra-siloses-group";
import { PrimarySilosesGroup } from "../primary-siloses-group";
import { WeighingHopper } from "../weighing-hopper";
import { Pipes } from "./components";
import { PipingAndInstrumentationDiagramProps } from "./types";

export function PipingAndInstrumentationDiagram({
  className,
  ...props
}: PipingAndInstrumentationDiagramProps) {
  useGate(controllerModel.Gate);

  return (
    <section
      className={cn("relative w-[1500px] h-[800px] mx-auto", className)}
      {...props}
    >
      <div className="absolute top-0 -left-5">
        <div className="relative min-w-max max-w-max">
          <div className="flex">
            <ExtraSilosesGroup className="translate-x-[15%]" />
            <PrimarySilosesGroup className="-translate-x-[15%]" />
          </div>
          <Pipes />
          <WeighingHopper className="mx-auto translate-x-2 mt-20" />
        </div>
      </div>
    </section>
  );
}
