import React from "react";
import { LIMIT } from "../../contants/products.contants";
import { useAppDispatch, useTypedSelector } from "../../hooks/redux";
import { fetchProductsThunk } from "../../redux/reducers/products/fetch-products";
import { selectProducts } from "../../redux/reducers/products/selectors";
import styles from "./TablePagination.module.scss";

export const TablePagination: React.FC = () => {
  const { totalProducts } = useTypedSelector(selectProducts);

  const pageAmount = Math.ceil(totalProducts / LIMIT);

  return (
    <div className={styles.pagination}>
      {Array.from({ length: pageAmount }, (_, index) => (
        <PaginationItem pageIndex={index + 1} key={index} />
      ))}
    </div>
  );
};

const PaginationItem: React.FC<{ pageIndex: number }> = React.memo(
  ({ pageIndex }) => {
    const { page } = useTypedSelector(selectProducts);
    const dispatch = useAppDispatch();

    const isActive = page === pageIndex ? true : false;
    const itemClass = isActive ? styles.itemActive : styles.item;

    const onChangePage = (clickedPage: number) => {
      if (clickedPage !== page) {
        dispatch(fetchProductsThunk(clickedPage));
      }
    };

    return (
      <span
        key={pageIndex}
        className={itemClass}
        onClick={() => onChangePage(pageIndex)}
      >
        {pageIndex}
      </span>
    );
  }
);
