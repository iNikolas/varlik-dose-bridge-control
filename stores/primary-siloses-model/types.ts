import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses, primarySiloses } from "@/config";
import { PrimarySilo } from "@/entities";

export type SilosesRecord = Record<ValueOf<typeof primarySiloses>, PrimarySilo>;

export type SelectionChangedEvent = {
  name: ValueOf<typeof primarySiloses>;
  selection: ValueOf<typeof externalSiloses>;
};
