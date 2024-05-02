import { ValueOf } from "next/dist/shared/lib/constants";
import { useUnit } from "effector-react";

import { externalSiloses, primarySiloses } from "@/config";
import { primarySilosesModel } from "@/stores";

export function useSiloButtonSelection(
  relatedSilo: ValueOf<typeof primarySiloses>,
  selection: ValueOf<typeof externalSiloses>,
) {
  const siloses = useUnit(primarySilosesModel.$siloses);
  const selectionChanged = useUnit(primarySilosesModel.selectionChanged);
  const selected = selection === siloses[relatedSilo].selection;

  return {
    selected,
    events: {
      onClick: () => selectionChanged({ name: relatedSilo, selection }),
    },
  };
}
