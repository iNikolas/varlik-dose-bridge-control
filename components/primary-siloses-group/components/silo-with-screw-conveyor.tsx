import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { primarySiloses, screws } from "@/config";

import { ScrewConveyor } from "../../screw-conveyor";
import { Silo } from "../../silo";
import { Controls } from "./controls";

interface SiloWithScrewConveyorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  siloName: ValueOf<typeof primarySiloses>;
  screwName: ValueOf<typeof screws>;
  isRunning: boolean;
  isSelected: boolean;
}

export function SiloWithScrewConveyor({
  className,
  siloName,
  screwName,
  isRunning,
  isSelected,
}: SiloWithScrewConveyorProps) {
  return (
    <section className={className}>
      <Silo name={siloName}>
        <Controls relatedSilo={siloName} />
      </Silo>
      <ScrewConveyor
        isReversed
        name={screwName}
        isRunning={isRunning}
        isSelected={isSelected}
      >
        <div className="w-10 h-2 bg-warning -z-10 absolute rotate-90 left-[65.7%] -top-[10%]" />
      </ScrewConveyor>
    </section>
  );
}
