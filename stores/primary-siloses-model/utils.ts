import { primarySiloses } from "@/config";

import { SilosesRecord } from "./types";

function assertIsSilosesRecord(
  record: Partial<SilosesRecord>,
): asserts record is SilosesRecord {
  Object.values(primarySiloses).forEach((name) => {
    if (!record[name]) {
      throw new Error(`SilosesRecord object is missing silo ${name} record`);
    }
  });
}

export function getDefaultStore(): SilosesRecord {
  const result = Object.values(primarySiloses).reduce<Partial<SilosesRecord>>(
    (acc, name) => ({
      ...acc,
      [name]: { name, selection: null },
    }),
    {},
  );

  assertIsSilosesRecord(result);

  return result;
}
