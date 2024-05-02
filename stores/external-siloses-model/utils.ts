import { externalSiloses } from "@/config";

import { ModeChangeEvent, SilosesRecord, ThresholdChangeEvent } from "./types";

function assertIsSilosesRecord(
  record: Partial<SilosesRecord>,
): asserts record is SilosesRecord {
  Object.values(externalSiloses).forEach((name) => {
    if (!record[name]) {
      throw new Error(`SilosesRecord object is missing silo ${name} record`);
    }
  });
}

export function getDefaultStore(): SilosesRecord {
  const result = Object.values(externalSiloses).reduce<Partial<SilosesRecord>>(
    (acc, name) => ({
      ...acc,
      [name]: { name, threshold: 0, isDelayed: false },
    }),
    {},
  );

  assertIsSilosesRecord(result);

  return result;
}

export function parseThresholdInput(
  siloses: SilosesRecord,
  { name, threshold }: ThresholdChangeEvent,
) {
  const cleanedThreshold = threshold.replace(/[^0-9,.]/g, "").replace(",", ".");
  const parsedThreshold = parseFloat(cleanedThreshold);
  const roundedThreshold = Number.isNaN(parsedThreshold)
    ? "0"
    : parsedThreshold.toFixed(2);

  return {
    ...siloses,
    [name]: {
      ...siloses[name],
      threshold: parseFloat(roundedThreshold),
    },
  };
}

export function processModeChange(
  siloses: SilosesRecord,
  { name, isDelayed }: ModeChangeEvent,
) {
  return {
    ...siloses,
    [name]: {
      ...siloses[name],
      isDelayed,
    },
  };
}
