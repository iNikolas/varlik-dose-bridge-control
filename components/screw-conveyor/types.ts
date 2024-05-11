export interface ScrewConveyorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  isRunning: boolean;
  isSelected: boolean;
  isReversed?: boolean;
  name: string;
}
