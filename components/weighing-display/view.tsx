import React from "react";

import { useCounterDigits } from "./hooks";

export function WeighingDisplay() {
  const { highValue, lowValue, fractionValue } = useCounterDigits();

  return (
    <section className="countdown font-mono bg-neutral rounded-box text-neutral-content p-1 shadow-inner">
      <span style={highValue} />
      <span style={lowValue} />.<span style={fractionValue} /> кг
    </section>
  );
}
