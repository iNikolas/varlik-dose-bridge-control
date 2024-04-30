import React from "react";
import { LuTimer, LuTimerOff } from "react-icons/lu";

import { Switch } from "./switch";

export function ModeSelector() {
  const id = React.useId();
  return (
    <section>
      <div className="prose">
        <h5>Подача:</h5>
      </div>
      <label htmlFor={id} className="swap swap-flip text-xs">
        <input id={id} type="checkbox" />

        <Switch className="swap-on">
          <LuTimer /> <span>відкладена</span>
        </Switch>
        <Switch className="swap-off">
          <LuTimerOff /> <span>негайна</span>
        </Switch>
      </label>
    </section>
  );
}
