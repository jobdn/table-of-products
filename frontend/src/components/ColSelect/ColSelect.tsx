import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { AvailableFilterCols, ColType } from "../../models/IFilter";
import { setCol, setType } from "../../redux/reducers/filter";

export const ColSelect: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const optionType =
      e.target[e.target.selectedIndex].getAttribute("data-type");
    dispatch(setType(optionType as ColType));
    dispatch(setCol(e.target.value as AvailableFilterCols));
  };

  return (
    <select name="col-select" defaultValue="name" onChange={handleChange}>
      <option value="name" data-type="varchar">
        Name
      </option>
      <option value="amount" data-type="int">
        Amount
      </option>
      <option value="distance" data-type="int">
        Distance
      </option>
    </select>
  );
};
