import {
  AvailableFilterCols,
  AvailableFilterConditions,
} from "./IFilterSelect";

export interface IFilter {
  col: AvailableFilterCols;
  condition: AvailableFilterConditions;
  value: string | number;
}
