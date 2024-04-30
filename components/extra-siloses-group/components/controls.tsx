import React from "react";
import { ThresholdInput } from "./threshold-input";
import { ModeSelector } from "./mode-selector.";

export function Controls() {
  return (
    <section>
      <ThresholdInput />
      <ModeSelector />
    </section>
  );
}
