import { createEvent, createStore, sample } from "effector";

import { getStateFx, showErrorMessageFx, toggleFeedModeFx } from "@/effects";

import {
  getDefaultStore,
  getSiloDataFromApiResponse,
  parseThresholdInput,
  processModeChange,
} from "./utils";
import { ModeChangeEvent, SilosesRecord, ThresholdChangeEvent } from "./types";

export const thresholdChanged = createEvent<ThresholdChangeEvent>();
export const modeChanged = createEvent<ModeChangeEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

sample({
  clock: [getStateFx.doneData, toggleFeedModeFx.doneData],
  fn: getSiloDataFromApiResponse,
  target: $siloses,
});

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

sample({
  clock: modeChanged,
  fn: ({ name }) => name,
  target: toggleFeedModeFx,
});

sample({
  clock: toggleFeedModeFx.failData,
  target: showErrorMessageFx,
});
