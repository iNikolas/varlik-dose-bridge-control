import { ValueOf } from "next/dist/shared/lib/constants";

import { rotaryValves } from "@/config";

export interface RotaryValveProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isRunning: boolean;
  isSelected: boolean;
  name: ValueOf<typeof rotaryValves>;
}
