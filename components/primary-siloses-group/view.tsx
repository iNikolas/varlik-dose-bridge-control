import React from "react";

import { primarySiloses, rotaryValves } from "@/config";

import { Silo } from "../silo";
import { Controls, SiloWithRotaryValve } from "./components";

export function PrimarySilosesGroup() {
  return (
    <section className="flex">
      <Silo name={primarySiloses.s206}>
        <Controls relatedSilo={primarySiloses.s206} />
      </Silo>
      <SiloWithRotaryValve
        isRunning={false}
        isSelected={false}
        rotaryValveName={rotaryValves.rv207}
        siloName={primarySiloses.s207}
      />
      <SiloWithRotaryValve
        isRunning={false}
        isSelected={false}
        rotaryValveName={rotaryValves.rv208}
        siloName={primarySiloses.s208}
      />
    </section>
  );
}
