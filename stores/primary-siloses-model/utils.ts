import { primarySiloses } from "@/config";

import { SelectionChangedEvent, SilosesRecord } from "./types";

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

export function updateSilosesSelection(
  siloses: SilosesRecord,
  { name, selection }: SelectionChangedEvent,
) {
  const result = { ...siloses };

  Object.values(primarySiloses).forEach((siloName) => {
    const isActiveSilo = siloName === name;
    const currentSelection = siloses[siloName].selection;

    if (isActiveSilo && currentSelection !== selection) {
      result[siloName].selection = selection;
    } else if (!isActiveSilo && currentSelection !== selection) {
      result[siloName].selection = currentSelection;
    } else {
      result[siloName].selection = null;
    }
  });

  return result;
}
