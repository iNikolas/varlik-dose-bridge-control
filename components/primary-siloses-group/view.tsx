import React from "react";

import { Silo } from "../silo";

export function PrimarySilosesGroup() {
  return (
    <section className="flex">
      <Silo name="S206" />
      <Silo name="S207" />
      <Silo name="S208" />
    </section>
  );
}
