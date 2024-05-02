import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses } from "@/config";
import { ExternalSilo } from "@/entities";

export type SilosesRecord = Record<
  ValueOf<typeof externalSiloses>,
  ExternalSilo
>;

export type ThresholdChangeEvent = {
  name: ValueOf<typeof externalSiloses>;
  threshold: string;
};

export type ModeChangeEvent = {
  name: ValueOf<typeof externalSiloses>;
  isDelayed: boolean;
};
