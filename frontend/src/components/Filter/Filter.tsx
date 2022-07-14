import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import {
  AvailableFilterCols,
  AvailableFilterConditions,
  AvailableFiltreSelectType,
} from "../../models/IFilterSelect";
import { selectProducts } from "../../redux/reducers/products/selectors";

export interface ISelectItem {
  value: AvailableFilterCols | AvailableFilterConditions;
  label: string;
}

const cols: ISelectItem[] = [
  { value: "name", label: "Name" },
  { value: "amount", label: "Amount" },
  { value: "distance", label: "Distance" },
];

const conditions: ISelectItem[] = [
  { value: "=", label: "equals" },
  { value: "like", label: "contains" },
  { value: ">", label: "gretter than" },
  { value: "<", label: "less than" },
];

export const Filter: React.FC = () => {
  const { filter } = useTypedSelector(selectProducts);

  return (
    <div>
      <FilterSelect name="col" options={cols}></FilterSelect>
      <FilterSelect name="condition" options={conditions}></FilterSelect>
      <input value={filter.value} type="text" placeholder="Filter by...." />
    </div>
  );
};

const FilterSelect: React.FC<{
  name: AvailableFiltreSelectType;
  options: ISelectItem[];
}> = ({ name, options }) => {
  const { filter } = useTypedSelector(selectProducts);

  const onSelect = () => {
    console.log();
  };

  return (
    <select name={name}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
