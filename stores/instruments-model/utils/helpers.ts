import { ApiState } from "@/api";

export function getDefaultState() {
  return {
    isScrewConveyor206Running: false,
    isScrewConveyor207Running: false,
    isRotaryValve208Running: false,
    isScrewConveyor202Running: false,
    isScrewConveyor204Running: false,
  };
}

export function mapApiValues({
  sc202,
  sc204,
  sc206,
  sc207,
  rv208,
}: ApiState): ReturnType<typeof getDefaultState> {
  return {
    isScrewConveyor206Running: sc206,
    isScrewConveyor207Running: sc207,
    isRotaryValve208Running: rv208,
    isScrewConveyor202Running: sc202,
    isScrewConveyor204Running: sc204,
  };
}
