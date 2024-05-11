import React from "react";

import {
  ExtraSilosesGroup,
  PrimarySilosesGroup,
  WeighingHopper,
} from "@/components";

export default function Home() {
  return (
    <main className="p-2 sm:p-4">
      <section className="mx-auto prose">
        <h1 className="text-center">
          Керування зовнішніми силосами з SiloMaster
        </h1>
      </section>
      <section>
        <div className="flex">
          <ExtraSilosesGroup className="translate-x-[15%]" />
          <PrimarySilosesGroup className="-translate-x-[15%]" />
        </div>
        <WeighingHopper />
      </section>
    </main>
  );
}
