import React from "react";

const tip =
  "Введіть цільову вагу. Це буде порогове значення для перемикання між основним і додатковим дозуванням «SiloMaster» кожного разу, коли починається нова партія.";

export function ThresholdInput() {
  return (
    <section className="tooltip tooltip-bottom" data-tip={tip}>
      <input
        type="text"
        placeholder="Вага, кг"
        className="input input-bordered input-xs w-full"
      />
    </section>
  );
}
