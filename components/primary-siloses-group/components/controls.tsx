import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { primarySiloses, externalSiloses } from "@/config";

import { SelectSiloButton } from "./select-silo-button";

export function Controls({
  relatedSilo,
}: {
  relatedSilo: ValueOf<typeof primarySiloses>;
}) {
  return Object.values(externalSiloses).map((name) => (
    <SelectSiloButton relatedSilo={relatedSilo} key={name}>
      {name}
    </SelectSiloButton>
  ));
}
