import React from "react";

import { useCounterDigits } from "./hooks";

export function WeighingDisplay() {
  const { highValue, lowValue, fractionValue } = useCounterDigits();

  return (
    <section className="flex flex-col items-center font-mono">
      <span className="countdown text-5xl">
        <span style={highValue} />
        <span style={lowValue} />.<span style={fractionValue} />
      </span>
      <span className="text-2xl">кг</span>
    </section>
  );
}
