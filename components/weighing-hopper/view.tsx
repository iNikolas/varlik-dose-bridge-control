import React from "react";
import Image from "next/image";

import { weighingHoppers } from "@/config";
import { cn } from "@/utils";
import hopperPic from "@/assets/images/weighing-hopper.png";

import { EquipmentLabel } from "../equipment-label";
import { WeighingDisplay } from "../weighing-display";
import { WeighingHopperProps } from "./types";

export function WeighingHopper({ className, ...props }: WeighingHopperProps) {
  return (
    <section className={cn("relative w-32", className)} {...props}>
      <EquipmentLabel className="top-6" title={weighingHoppers.wh311}>
        <WeighingDisplay />
      </EquipmentLabel>
      <Image
        className="object-cover h-auto w-full"
        priority
        width={150}
        src={hopperPic}
        alt="Силос"
      />
    </section>
  );
}
