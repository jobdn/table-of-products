export type AvailableFilterConditions = "" | ">" | "<" | "=" | "like";
export type AvailableFilterCols = "name" | "amount" | "distance";

export type ColType = "int" | "varchar";

export interface IFilter {
  type: ColType;
  col: AvailableFilterCols;
  condition: AvailableFilterConditions;
  filterValue: string | number;
}
