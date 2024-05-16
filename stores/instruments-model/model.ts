import { createStore, sample } from "effector";

import {
  getStateFx,
  setPrimarySiloStateFx,
  setSiloThresholdFx,
  toggleFeedModeFx,
} from "@/effects";

import { getDefaultState, mapApiValues } from "./utils";

export const $state = createStore(getDefaultState());

sample({
  clock: [
    getStateFx.doneData,
    toggleFeedModeFx.doneData,
    setSiloThresholdFx.doneData,
    setPrimarySiloStateFx.doneData,
  ],
  fn: mapApiValues,
  target: $state,
});
