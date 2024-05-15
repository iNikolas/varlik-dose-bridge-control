import { ValueOf } from "next/dist/shared/lib/constants";

import { externalSiloses, primarySiloses, selections } from "@/config";
import { PrimarySilo } from "@/entities";
import { ApiState } from "@/api";

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

function parseSelectionState(
  selection: number,
): ValueOf<typeof externalSiloses> | null {
  return selections[selection] ?? null;
}

export function getSiloDataFromApiResponse({
  s206SelectionState,
  s207SelectionState,
  s208SelectionState,
}: ApiState): SilosesRecord {
  return {
    S206: {
      name: "S206",
      selection: parseSelectionState(s206SelectionState),
    },
    S207: {
      name: "S207",
      selection: parseSelectionState(s207SelectionState),
    },
    S208: {
      name: "S208",
      selection: parseSelectionState(s208SelectionState),
    },
  };
}

function findSelectionState(
  silosesData: Array<PrimarySilo>,
  selection: ValueOf<typeof externalSiloses>,
): ValueOf<typeof primarySiloses> | null {
  return silosesData.find((silo) => selection === silo.selection)?.name ?? null;
}

export function extractSelectionStates(data: SilosesRecord) {
  const silosesData = Object.values(data);

  return {
    selectionState202: findSelectionState(silosesData, externalSiloses.s202),
    selectionState204: findSelectionState(silosesData, externalSiloses.s204),
  };
}
