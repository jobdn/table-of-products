import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AvailableFilterCols,
  AvailableFilterConditions,
  ColType,
} from "../../../models/IFilter";
import { IFilterState } from "../../../models/IFilterState";

const initialState: IFilterState = {
  type: "varchar",
  col: "name",
  condition: "like",
  filterValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType(state, action: PayloadAction<ColType>) {
      state.type = action.payload;
    },
    setCol(state, action: PayloadAction<AvailableFilterCols>) {
      state.col = action.payload;
    },
    setCondition(state, action: PayloadAction<AvailableFilterConditions>) {
      state.condition = action.payload;
    },
    setFilterValue(state, action: PayloadAction<number | string>) {
      state.filterValue = action.payload;
    },
  },
});

export const { setCol, setCondition, setFilterValue, setType } =
  filterSlice.actions;
export default filterSlice.reducer;
