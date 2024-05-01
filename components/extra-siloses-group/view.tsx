import React from "react";

import { externalSiloses } from "@/config";

import { Controls } from "./components";
import { Silo } from "../silo";

export function ExtraSilosesGroup() {
  return (
    <section className="flex">
      {Object.values(externalSiloses).map((name) => (
        <Silo key={name} name={name}>
          <Controls relatedSilo={name} />
        </Silo>
      ))}
    </section>
  );
}
