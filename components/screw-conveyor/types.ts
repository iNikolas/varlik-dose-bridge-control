export interface ScrewConveyorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isRunning: boolean;
  isSelected: boolean;
  name: string;
  blinkTimeMs?: number;
}
