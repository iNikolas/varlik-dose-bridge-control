"use client";

import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useUnit } from "effector-react";
import { LuTimer, LuTimerOff } from "react-icons/lu";

import { externalSiloses } from "@/config";
import { cn } from "@/utils";
import { externalSilosesModel } from "@/stores";

import { Switch } from "./switch";

interface ModeSelectorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  relatedSilo: ValueOf<typeof externalSiloses>;
}

const tipOff =
  "Таймер вимкнено – додаткова подача розпочнеться від нуля до введеного значення ваги";

const tipOn =
  "Таймер увімкнено - додаткова подача почнеться від введеного значення ваги до цільової ваги в основній програмі";

export function ModeSelector({
  relatedSilo,
  className,
  ...props
}: ModeSelectorProps) {
  const id = React.useId();
  const siloses = useUnit(externalSilosesModel.$siloses);
  const modeChanged = useUnit(externalSilosesModel.modeChanged);

  const switchState = siloses[relatedSilo].isDelayed;

  return (
    <section
      className={cn("tooltip tooltip-bottom mt-1 mx-auto block", className)}
      data-tip={switchState ? tipOn : tipOff}
      {...props}
    >
      <label className="swap swap-flip text-xs" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={switchState}
          onChange={(e) =>
            modeChanged({ name: relatedSilo, isDelayed: e.target.checked })
          }
        />
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
