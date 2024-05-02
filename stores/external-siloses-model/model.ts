import { createEvent, createStore, sample } from "effector";

import {
  getDefaultStore,
  parseThresholdInput,
  processModeChange,
} from "./utils";
import { ModeChangeEvent, SilosesRecord, ThresholdChangeEvent } from "./types";

export const thresholdChanged = createEvent<ThresholdChangeEvent>();
export const modeChanged = createEvent<ModeChangeEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

sample({
  clock: thresholdChanged,
  source: $siloses,
  fn: parseThresholdInput,
  target: $siloses,
});

sample({
  clock: modeChanged,
  source: $siloses,
  fn: processModeChange,
  target: $siloses,
});
