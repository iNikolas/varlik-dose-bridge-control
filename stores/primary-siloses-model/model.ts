import { createEvent, createStore } from "effector";

import { getDefaultStore } from "./utils";
import { SelectionChangedEvent, SilosesRecord } from "./types";

export const selectionChanged = createEvent<SelectionChangedEvent>();

export const $siloses = createStore<SilosesRecord>(getDefaultStore());

// sample({
//   clock: selectionChanged,
//   source: $siloses,
//   fn: (siloses, { name, selection }) => {
//     const result = { ...siloses };

//     Object.values(primarySiloses).forEach((siloName) => {
//         result[siloName] = {...result[siloName], selection: result[siloName].selection === selection ||}
//     });
//   },
//   target: $siloses,
// });
