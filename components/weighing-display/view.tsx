import React from "react";

import { useCounterDigits } from "./hooks";

export function WeighingDisplay() {
  const { highValue, lowValue, fractionValue } = useCounterDigits();

  return (
    <section className="card bg-primary text-primary-content max-w-max">
      <div className="card-body">
        <h2 className="card-title">Вага бункера</h2>
        <p>
          <div className="countdown font-mono text-5xl">
            <span style={highValue} />
            <span style={lowValue} />.<span style={fractionValue} />
          </div>
          <div className="text-md text-end">кг</div>
        </p>
      </div>
    </section>
  );
}
