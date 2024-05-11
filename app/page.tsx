import React from "react";

import { PipingAndInstrumentationDiagram } from "@/components";

export default function Home() {
  return (
    <main className="p-2 sm:p-4">
      <section className="mx-auto prose">
        <h1 className="text-center">
          Керування зовнішніми силосами з SiloMaster
        </h1>
      </section>
      <PipingAndInstrumentationDiagram />
    </main>
  );
}
