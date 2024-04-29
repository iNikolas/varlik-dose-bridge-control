import { CustomCSSProperties } from "./types";

export function useCounterDigits() {
  const highValue: CustomCSSProperties = {
    "--value": 1,
  };
  const lowValue: CustomCSSProperties = {
    "--value": 0,
  };
  const fractionValue: CustomCSSProperties = {
    "--value": 70,
  };

  return { highValue, lowValue, fractionValue };
}
