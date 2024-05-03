import React from "react";
import Image from "next/image";

import siloPic from "@/assets/images/silo.png";

import { SiloProps } from "./types";
import { EquipmentLabel } from "../equipment-label";

export function Silo({ name, children }: React.PropsWithChildren<SiloProps>) {
  return (
    <section className="relative w-32">
      <EquipmentLabel title={name}>{children}</EquipmentLabel>
      <Image
        className="object-cover h-auto w-full"
        priority
        width={150}
        src={siloPic}
        alt="Силос"
      />
    </section>
  );
}
