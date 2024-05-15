import React from "react";
import { useUnit } from "effector-react";

import { weighingErrorDelayMs, weightDivider } from "@/config";
import { useBlinkInterval } from "@/utils";
import { weighingHopperModel } from "@/stores";

import { CustomCSSProperties } from "./types";
import { fractionDivider } from "./constants";

export function useWeighingError() {
  const isBlinking = useBlinkInterval();
  const { weightError } = useUnit(weighingHopperModel.$weighingData);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (weightError) {
      timeout = setTimeout(() => {
        setIsError(true);
      }, weighingErrorDelayMs);
    } else {
      setIsError(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [weightError]);

  return { isBlinking, isError };
}

export function useCounterDigits() {
  const weighingData = useUnit(weighingHopperModel.$weighingData);

  const weight = Math.abs(weighingData.weight);
  const isPositive = weighingData.weight >= 0;

  const highValue: CustomCSSProperties = {
    "--value":
      Math.floor(weight / (weightDivider * fractionDivider)) % fractionDivider,
  };
  const lowValue: CustomCSSProperties = {
    "--value": Math.floor(weight / weightDivider) % fractionDivider,
  };
  const fractionValue: CustomCSSProperties = {
    "--value": (weight % weightDivider) * weightDivider,
  };

  return { highValue, lowValue, fractionValue, isPositive };
}
