import { combine, createEvent, createStore, sample } from "effector";

import {
  getStateFx,
  setPrimarySiloStateFx,
  showErrorMessageFx,
} from "@/effects";

import {
  extractSelectionStates,
  getDefaultStore,
  getSiloDataFromApiResponse,
  updateSilosesSelection,
} from "./utils";
import { SelectionChangedEvent, SilosesRecord } from "./types";

export const selectionChanged = createEvent<SelectionChangedEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

export const $isPending = combine([setPrimarySiloStateFx.pending], (tuple) =>
  tuple.some(Boolean),
);

sample({
  clock: [getStateFx.doneData, setPrimarySiloStateFx.doneData],
  source: $isPending,
  filter: (isPending) => !isPending,
  fn: (_, data) => getSiloDataFromApiResponse(data),
  target: $siloses,
});

sample({
  clock: selectionChanged,
  source: $siloses,
  fn: updateSilosesSelection,
  target: $siloses,
});

sample({
  clock: selectionChanged,
  source: $siloses,
  fn: extractSelectionStates,
  target: setPrimarySiloStateFx,
});

sample({ clock: setPrimarySiloStateFx.failData, target: showErrorMessageFx });
