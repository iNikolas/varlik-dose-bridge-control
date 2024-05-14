export interface ApiState {
  weight: number;
  weightError: boolean;
  isImmediateFeedSilo202: boolean;
  isImmediateFeedSilo204: boolean;
  silo202Threshold: number;
  silo204Threshold: number;
  s206SelectionState: number;
  s207SelectionState: number;
  s208SelectionState: number;
}
