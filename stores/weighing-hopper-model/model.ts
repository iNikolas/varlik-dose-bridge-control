import { createStore, sample } from "effector";

import {
  getStateFx,
  setPrimarySiloStateFx,
  setSiloThresholdFx,
  toggleFeedModeFx,
} from "@/effects";

import { getDefaultStore } from "./utils";

export const $weighingData = createStore(getDefaultStore());

sample({
  clock: [
    setSiloThresholdFx.doneData,
    toggleFeedModeFx.doneData,
    getStateFx.doneData,
    setPrimarySiloStateFx.doneData,
  ],
  fn: ({ weight, weightError }) => ({ weight, weightError }),
  target: $weighingData,
});
