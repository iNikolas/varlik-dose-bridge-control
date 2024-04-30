import React from "react";
import Image from "next/image";

import siloPic from "@/assets/images/silo.png";

import { Title } from "./components";
import { SiloProps } from "./types";

export function Silo({ name, children }: React.PropsWithChildren<SiloProps>) {
  return (
    <section className="relative w-32">
      <div className="absolute z-10 left-1/2 -translate-x-2/4 top-12">
        <Title>{name}</Title>
        <div>{children}</div>
      </div>
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
