import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useUnit } from "effector-react";

import { externalSiloses } from "@/config";
import { externalSilosesModel } from "@/stores";

export function useInputEvents(relatedSilo: ValueOf<typeof externalSiloses>) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [input, setInput] = React.useState("");

  const thresholdChanged = useUnit(externalSilosesModel.thresholdChanged);

  const siloses = useUnit(externalSilosesModel.$siloses);
  const { threshold } = siloses[relatedSilo];

  React.useEffect(() => {
    if (!isFocused && input) {
      setInput("");
      thresholdChanged({ name: relatedSilo, threshold: input });
    }
  }, [isFocused, relatedSilo, thresholdChanged, input]);

  return {
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setInput(e.target.value.replace(/[^0-9,.]/g, "")),
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setInput(String(threshold));
        e.currentTarget.blur();
      } else if (e.key === "Enter") {
        e.currentTarget.blur();
      }
    },
    value: isFocused ? input : `${threshold} кг`,
  };
}
