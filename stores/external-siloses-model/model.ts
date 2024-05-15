import { combine, createEvent, createStore, sample } from "effector";

import {
  getStateFx,
  setSiloThresholdFx,
  showErrorMessageFx,
  toggleFeedModeFx,
} from "@/effects";

import {
  getDefaultStore,
  getSiloDataFromApiResponse,
  parseThreshold,
  parseThresholdInput,
  processModeChange,
} from "./utils";
import { ModeChangeEvent, SilosesRecord, ThresholdChangeEvent } from "./types";

export const thresholdChanged = createEvent<ThresholdChangeEvent>();
export const modeChanged = createEvent<ModeChangeEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

export const $isPending = combine(
  [toggleFeedModeFx.pending, setSiloThresholdFx.pending],
  (tuple) => tuple.some(Boolean),
);

sample({
  clock: [
    getStateFx.doneData,
    toggleFeedModeFx.doneData,
    setSiloThresholdFx.doneData,
  ],
  source: $isPending,
  filter: (isPending) => !isPending,
  fn: (_, data) => getSiloDataFromApiResponse(data),
  target: $siloses,
});

sample({
  clock: thresholdChanged,
  source: $siloses,
  fn: parseThresholdInput,
  target: $siloses,
});

sample({
  clock: thresholdChanged,
  fn: ({ name, threshold }) => ({
    silo: name,
    threshold: parseThreshold(threshold),
  }),
  target: setSiloThresholdFx,
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

sample({ clock: setSiloThresholdFx.failData, target: showErrorMessageFx });
