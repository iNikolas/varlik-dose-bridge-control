import React from "react";
import { LuTimer, LuTimerOff } from "react-icons/lu";

import { Switch } from "./switch";

export function ModeSelector() {
  const id = React.useId();
  return (
    <section>
      <label className="swap swap-flip text-xs" htmlFor={id}>
        <input id={id} type="checkbox" />
        {}
        <Switch className="swap-on bg-secondary text-secondary-content">
          <LuTimer />
        </Switch>
        <Switch className="swap-off bg-accent text-accent-content">
          <LuTimerOff />
        </Switch>
      </label>
    </section>
  );
}
