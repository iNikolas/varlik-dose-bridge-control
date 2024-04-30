import React from "react";

import {
  ExtraSilosesGroup,
  PrimarySilosesGroup,
  WeighingDisplay,
} from "@/components";

export default function Home() {
  return (
    <main className="p-2 sm:p-4">
      <section className="prose">
        <h1>Керування зовнішніми силосами з SiloMaster</h1>
      </section>
      <WeighingDisplay />
      <ExtraSilosesGroup />
      <PrimarySilosesGroup />
    </main>
  );
}
