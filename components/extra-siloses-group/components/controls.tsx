import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses } from "@/config";

import { ThresholdInput } from "./threshold-input";
import { ModeSelector } from "./mode-selector.";

export function Controls({
  relatedSilo,
}: {
  relatedSilo: ValueOf<typeof externalSiloses>;
}) {
  return (
    <section>
      <ThresholdInput relatedSilo={relatedSilo} />
      <ModeSelector relatedSilo={relatedSilo} />
    </section>
  );
}
