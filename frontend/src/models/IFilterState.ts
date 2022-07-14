import {
  ColType,
  AvailableFilterCols,
  AvailableFilterConditions,
} from "./IFilter";

export interface IFilterState {
  type: ColType;
  col: AvailableFilterCols;
  condition: AvailableFilterConditions;
  filterValue: string | number;
}
