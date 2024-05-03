import React from "react";
import Image from "next/image";

import { weighingHoppers } from "@/config";
import hopperPic from "@/assets/images/weighing-hopper.png";

import { EquipmentLabel } from "../equipment-label";
import { WeighingDisplay } from "../weighing-display";

export function WeighingHopper() {
  return (
    <section className="relative w-32">
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
