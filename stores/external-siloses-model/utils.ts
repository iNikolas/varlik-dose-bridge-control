import { externalSiloses, weightDivider } from "@/config";
import { ApiState } from "@/api";

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

export function getSiloDataFromApiResponse(data: ApiState): SilosesRecord {
  return {
    S202: {
      name: "S202",
      threshold: data.silo202Threshold / weightDivider,
      isDelayed: !data.isImmediateFeedSilo202,
    },
    S204: {
      name: "S204",
      threshold: data.silo204Threshold / weightDivider,
      isDelayed: !data.isImmediateFeedSilo204,
    },
  };
}

export function parseThreshold(threshold: string) {
  const cleanedThreshold = threshold.replace(/[^0-9,.]/g, "").replace(",", ".");
  const parsedThreshold = parseFloat(cleanedThreshold);
  const roundedThreshold = Number.isNaN(parsedThreshold)
    ? "0"
    : parsedThreshold.toFixed(2);

  return (
    Math.round(parseFloat(roundedThreshold) * weightDivider) / weightDivider
  );
}

export function parseThresholdInput(
  siloses: SilosesRecord,
  { name, threshold }: ThresholdChangeEvent,
) {
  return {
    ...siloses,
    [name]: {
      ...siloses[name],
      threshold: parseThreshold(threshold),
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
