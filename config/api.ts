import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses } from "./siloses";

export const apiRoutes = { command: "/command" } as const;

export const weightDivider = 10;

export const commands = {
  toggleFeedMode: "tfm",
  setSiloTHreshold: "sst",
  setPrimarySiloState: "spss",
} as const;

export const propertyNames = {
  externalSilo: "ex",
  silo: "s",
  threshold: "t",
  selectionState202: "ss202",
  selectionState204: "ss204",
} as const;

export const selections: Record<
  number,
  null | ValueOf<typeof externalSiloses>
> = {
  0: null,
  1: externalSiloses.s202,
  2: externalSiloses.s204,
};
