import { createEvent, createStore, sample } from "effector";

import { getDefaultStore, updateSilosesSelection } from "./utils";
import { SelectionChangedEvent, SilosesRecord } from "./types";

export const selectionChanged = createEvent<SelectionChangedEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

sample({
  clock: selectionChanged,
  source: $siloses,
  fn: updateSilosesSelection,
  target: $siloses,
});
