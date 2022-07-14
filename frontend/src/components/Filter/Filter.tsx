import React from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/redux";
import {
  AvailableFilterCols,
  AvailableFilterConditions,
  ColType,
} from "../../models/IFilter";
import {
  setCol,
  setCondition,
  setType,
  setValue,
} from "../../redux/reducers/filter";
import { selectFilter } from "../../redux/reducers/filter/selector";
import { fetchProductsThunk } from "../../redux/reducers/products/fetch-products";
import { selectProducts } from "../../redux/reducers/products/selectors";

export interface ISelectItem {
  value: AvailableFilterCols | AvailableFilterConditions;
  label: string;
}

export const Filter: React.FC = () => {
  return (
    <div>
      <ColSelect />
      <ConditionSelect />
      <FilterInput />
    </div>
  );
};

const ColSelect: React.FC = () => {
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

const ConditionSelect = () => {
  const dispatch = useAppDispatch();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setCondition(e.target.value as AvailableFilterConditions));
  };

  return (
    <select
      name="condtion-select"
      defaultValue="equals"
      onChange={handleChange}
    >
      <option value="=">equals</option>
      <option value="like">contains</option>
      <option value=">">gretter than</option>
      <option value="<">less than</option>
    </select>
  );
};

const FilterInput: React.FC = () => {
  const { type, col, condition, filterValue } = useTypedSelector(selectFilter);
  const { page } = useTypedSelector(selectProducts);
  const dispatch = useAppDispatch();
  const firstLoadRef = React.useRef(true);

  React.useEffect(() => {
    // We cound't fetch products in the first render again
    if (!firstLoadRef.current) {
      const id = setTimeout(() => {
        dispatch(
          fetchProductsThunk(page, {
            type,
            col,
            condition,
            filterValue,
          })
        );
      }, 500);
      return () => clearTimeout(id);
    }

    firstLoadRef.current = false;
  }, [filterValue, col, condition]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setValue(e.target.value));
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

// const FilterSelect: React.FC<{
//   name: AvailableFiltreSelectType;
//   options: ISelectItem[];
// }> = ({ name, options }) => {
//   const { col, condition } = useTypedSelector(selectFilter);
//   const dispatch = useAppDispatch();

//   const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
//     if (e.target.name === "col") {
//       dispatch(setCol(e.target.value as AvailableFilterCols));
//     } else if (e.target.name === "condition") {
//       dispatch(setCondition(e.target.value as AvailableFilterConditions));
//     }
//   };

//   return (
//     <select
//       name={name}
//       value={name === "col" ? col : condition}
//       onChange={handleChange}
//     >
//       {options.map((opt) => (
//         <option key={opt.value} value={opt.value}>
//           {opt.label}
//         </option>
//       ))}
//     </select>
//   );
// };
