import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses, screws } from "@/config";
import { cn } from "@/utils";

import { Silo } from "../../silo";
import { ScrewConveyor } from "../../screw-conveyor";
import { Pipe } from "../../pipe";
import { Controls } from "./controls";

interface SiloWithScrewConveyorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  siloName: ValueOf<typeof externalSiloses>;
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
  ...props
}: SiloWithScrewConveyorProps) {
  return (
    <section className={cn("relative", className)} {...props}>
      <Silo name={siloName}>
        <Controls relatedSilo={siloName} />
      </Silo>
      <ScrewConveyor
        className="-left-[13%]"
        isRunning={isRunning}
        isSelected={isSelected}
        name={screwName}
      >
        <Pipe className="rotate-90 left-[18.8%] -top-[20%]" />
      </ScrewConveyor>
    </section>
  );
}
