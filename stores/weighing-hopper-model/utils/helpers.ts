import { ApiState } from "@/api";

export function getDefaultStore() {
  return {
    weight: 0,
    weightError: false,
  };
}

export function mapApiResponse({ w, we }: ApiState) {
  return { weight: w, weightError: we };
}
