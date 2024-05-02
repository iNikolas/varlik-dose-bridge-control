import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses, primarySiloses } from "@/config";

export interface ExternalSilo {
  name: ValueOf<typeof externalSiloses>;
  threshold: number;
  isDelayed: boolean;
}

export interface PrimarySilo {
  name: ValueOf<typeof primarySiloses>;
  selection: ValueOf<typeof externalSiloses> | null;
}
