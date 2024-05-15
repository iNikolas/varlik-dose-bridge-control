import { sample, createEvent, combine } from "effector";
import { createGate } from "effector-react";

import {
  getStateFx,
  pollStateFx,
  setPrimarySiloStateFx,
  setSiloThresholdFx,
  showErrorMessageFx,
  stopStatePollingFx,
  toggleFeedModeFx,
} from "@/effects";
import { assertIsDefined } from "@/utils";

assertIsDefined(process.env.NEXT_PUBLIC_POLLING_PERIOD_MS);

export const Gate = createGate();

const fetchStateRequested = createEvent();

const $isPending = combine(
  [
    setSiloThresholdFx.pending,
    toggleFeedModeFx.pending,
    getStateFx.pending,
    setPrimarySiloStateFx.pending,
  ],
  (tuple) => tuple.some(Boolean),
);

sample({
  clock: Gate.open,
  fn: () => fetchStateRequested,
  target: pollStateFx,
});

sample({
  clock: fetchStateRequested,
  source: $isPending,
  filter: (isPending) => !isPending,
  target: getStateFx,
});

sample({ clock: Gate.close, target: stopStatePollingFx });

sample({ clock: getStateFx.failData, target: showErrorMessageFx });
