import React from "react";
import { useAppDispatch, useTypedSelector } from "../../hooks/redux";
import { selectFilter } from "../../redux/reducers/filter/selector";
import { fetchProductsThunk } from "../../redux/reducers/products/fetch-products";
import { selectProducts } from "../../redux/reducers/products/selectors";
import { ColSelect } from "../ColSelect";
import { ConditionSelect } from "../ConditionSelect";
import { FilterInput } from "../FilterInput";

export const Filter: React.FC = () => {
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

  return (
    <div style={{ paddingBottom: "20px" }}>
      <ColSelect />
      <ConditionSelect />
      <FilterInput />
    </div>
  );
};
