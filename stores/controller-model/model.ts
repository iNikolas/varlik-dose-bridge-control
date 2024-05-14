import { sample, createEvent } from "effector";
import { createGate } from "effector-react";

import {
  getStateFx,
  pollStateFx,
  showErrorMessageFx,
  stopStatePollingFx,
} from "@/effects";
import { assertIsDefined } from "@/utils";

assertIsDefined(process.env.NEXT_PUBLIC_POLLING_PERIOD_MS);

export const Gate = createGate();

const fetchStateRequested = createEvent();

sample({
  clock: Gate.open,
  fn: () => fetchStateRequested,
  target: pollStateFx,
});

sample({ clock: fetchStateRequested, target: getStateFx });

sample({ clock: Gate.close, target: stopStatePollingFx });

sample({ clock: getStateFx.failData, target: showErrorMessageFx });
