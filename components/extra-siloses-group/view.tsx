import React from "react";

import { Controls } from "./components";
import { Silo } from "../silo";

export function ExtraSilosesGroup() {
  return (
    <section className="flex">
      <Silo name="S202">
        <Controls />
      </Silo>
      <Silo name="S204">
        <Controls />
      </Silo>
    </section>
  );
}
