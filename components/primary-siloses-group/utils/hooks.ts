import { ValueOf } from "next/dist/shared/lib/constants";
import { useUnit } from "effector-react";

import { externalSiloses, primarySiloses } from "@/config";
import { primarySilosesModel } from "@/stores";

export function useSiloButtonSelection(
  relatedSilo: ValueOf<typeof primarySiloses>,
  selection: ValueOf<typeof externalSiloses>,
) {
  const siloses = useUnit(primarySilosesModel.$siloses);
  const isPending = useUnit(primarySilosesModel.$isPending);
  const selectionChanged = useUnit(primarySilosesModel.selectionChanged);
  const selected = selection === siloses[relatedSilo].selection;

  return {
    selected,
    disabled: isPending,
    events: {
      onClick: () => {
        if (isPending) {
          return;
        }

        selectionChanged({ name: relatedSilo, selection });
      },
    },
  };
}
