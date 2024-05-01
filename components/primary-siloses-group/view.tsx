import React from "react";

import { primarySiloses } from "@/config";

import { Silo } from "../silo";
import { Controls } from "./components";

export function PrimarySilosesGroup() {
  return (
    <section className="flex">
      {Object.values(primarySiloses).map((name) => (
        <Silo key={name} name={name}>
          <Controls relatedSilo={name} />
        </Silo>
      ))}
    </section>
  );
}
