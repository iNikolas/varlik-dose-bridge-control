import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { primarySiloses, rotaryValves } from "@/config";

import { Silo } from "../../silo";
import { RotaryValve } from "../../rotary-valve";
import { Pipe } from "../../pipe";
import { Controls } from "./controls";

interface SiloWithRotaryValveProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isRunning: boolean;
  isSelected: boolean;
  rotaryValveName: ValueOf<typeof rotaryValves>;
  siloName: ValueOf<typeof primarySiloses>;
}

export function SiloWithRotaryValve({
  className,
  rotaryValveName,
  siloName,
  isRunning,
  isSelected,
}: SiloWithRotaryValveProps) {
  return (
    <section className={className}>
      <Silo name={siloName}>
        <Controls relatedSilo={siloName} />
      </Silo>
      <RotaryValve
        className="left-[23%] top-1"
        name={rotaryValveName}
        isRunning={isRunning}
        isSelected={isSelected}
      >
        <Pipe className="w-14 rotate-90 left-[4.7%] -top-7" />
      </RotaryValve>
    </section>
  );
}
