import { createStore, sample } from "effector";

import {
  getStateFx,
  setPrimarySiloStateFx,
  setSiloThresholdFx,
  toggleFeedModeFx,
} from "@/effects";

import { getDefaultStore, mapApiResponse } from "./utils";

export const $weighingData = createStore(getDefaultStore());

sample({
  clock: [
    setSiloThresholdFx.doneData,
    toggleFeedModeFx.doneData,
    getStateFx.doneData,
    setPrimarySiloStateFx.doneData,
  ],
  fn: mapApiResponse,
  target: $weighingData,
});
