import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses } from "@/config";

export interface ExternalSilo {
  name: ValueOf<typeof externalSiloses>;
  threshold: number;
  isDelayed: boolean;
}
