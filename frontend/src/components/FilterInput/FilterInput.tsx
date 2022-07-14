import React from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/redux";
import { setFilterValue } from "../../redux/reducers/filter";
import { selectFilter } from "../../redux/reducers/filter/selector";

export const FilterInput: React.FC = () => {
  const { filterValue } = useTypedSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <input
      value={filterValue}
      onChange={handleChange}
      type="text"
      placeholder="Filter by...."
    />
  );
};
