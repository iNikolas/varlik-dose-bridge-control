"use client";

import React from "react";
import Image from "next/image";

import rotaryValvePic from "@/assets/images/rotary-valve.png";
import { cn, useBlinkInterval } from "@/utils";

import { RotaryValveProps } from "./types";
import { EquipmentLabel } from "../equipment-label";

export function RotaryValve({
  className,
  isRunning,
  isSelected,
  name,
  children,
  ...props
}: RotaryValveProps) {
  const isBlinking = useBlinkInterval();

  return (
    <section className={cn("relative max-w-max", className)} {...props}>
      <EquipmentLabel
        className="left-1/4 -top-0.5 scale-[0.35] z-10"
        title={name}
      />
      <Image
        priority
        className={cn(
          isRunning && "-hue-rotate-60",
          isSelected && !isRunning && isBlinking && "hue-rotate-[215deg]",
        )}
        src={rotaryValvePic}
        alt="поворотний клапан"
        width={130}
      />
      {children}
    </section>
  );
}
