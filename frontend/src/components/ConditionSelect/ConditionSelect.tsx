import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { AvailableFilterConditions } from "../../models/IFilter";
import { setCondition } from "../../redux/reducers/filter";

export const ConditionSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setCondition(e.target.value as AvailableFilterConditions));
  };

  return (
    <select name="condtion-select" defaultValue="like" onChange={handleChange}>
      <option value="=">equals</option>
      <option value="like">contains</option>
      <option value=">">gretter than</option>
      <option value="<">less than</option>
    </select>
  );
};
