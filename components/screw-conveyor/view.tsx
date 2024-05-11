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
  isReversed,
  name,
  children,
  ...props
}: ScrewConveyorProps) {
  const isBlinking = useBlinkInterval();

  return (
    <section
      className={cn(
        "max-w-max min-w-max relative",
        isReversed && "-left-[55%]",
        className,
      )}
      {...props}
    >
      <EquipmentLabel
        className={cn(
          "left-3/4 top-3.5 scale-50 z-10",
          isReversed && "left-1/4",
        )}
        title={name}
      />
      <Image
        priority
        className={cn(
          isRunning && "-hue-rotate-60",
          isSelected && !isRunning && isBlinking && "hue-rotate-[215deg]",
          isReversed && "-scale-x-100",
        )}
        width={400}
        src={screwConveyorPic}
        alt="Шнековий конвеєр"
      />
      {children}
    </section>
  );
}
