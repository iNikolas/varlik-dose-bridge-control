import React from "react";

import {
  ExtraSilosesGroup,
  PrimarySilosesGroup,
  ScrewConveyor,
  WeighingHopper,
} from "@/components";
import { screws } from "@/config";

export default function Home() {
  return (
    <main className="p-2 sm:p-4">
      <section className="prose">
        <h1>Керування зовнішніми силосами з SiloMaster</h1>
      </section>
      <ExtraSilosesGroup />
      <PrimarySilosesGroup />
      <WeighingHopper />
      <ScrewConveyor name={screws.sc206} isRunning={false} isSelected={false} />
    </main>
  );
}
