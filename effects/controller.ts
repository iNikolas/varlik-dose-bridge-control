import { EventCallable, createEffect } from "effector";

import {
  getState,
  setPrimarySiloState,
  setSiloThreshold,
  toggleFeedMode,
} from "@/api";

export const getStateFx = createEffect(getState);

let interval: NodeJS.Timeout;

export const pollStateFx = createEffect((event: EventCallable<void>) => {
  event();
  interval = setInterval(() => {
    event();
  }, Number(process.env.NEXT_PUBLIC_POLLING_PERIOD_MS));
});

export const stopStatePollingFx = createEffect(() => clearInterval(interval));

export const toggleFeedModeFx = createEffect(toggleFeedMode);

export const setSiloThresholdFx = createEffect(setSiloThreshold);

export const setPrimarySiloStateFx = createEffect(setPrimarySiloState);
