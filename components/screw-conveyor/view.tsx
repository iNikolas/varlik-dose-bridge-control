"use client";

import React from "react";
import Image from "next/image";

import screwConveyorPic from "@/assets/images/screw_conveyor.png";
import { cn, useBlinkInterval } from "@/utils";

import { ScrewConveyorProps } from "./types";
import { EquipmentLabel } from "../equipment-label";

export function ScrewConveyor({
  className,
  isRunning,
  isSelected,
  name,
  ...props
}: ScrewConveyorProps) {
  const isBlinking = useBlinkInterval();

  return (
    <section className={cn(" max-w-max relative", className)} {...props}>
      <EquipmentLabel className="left-3/4 top-3.5 scale-50 z-10" title={name} />
      <Image
        priority
        className={cn(
          className,
          isRunning && "-hue-rotate-60",
          isSelected && !isRunning && isBlinking && "hue-rotate-[215deg]",
        )}
        width={400}
        src={screwConveyorPic}
        alt="Шнековий конвеєр"
      />
    </section>
  );
}
