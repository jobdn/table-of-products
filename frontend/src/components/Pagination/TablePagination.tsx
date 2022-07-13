import React from "react";
import styles from "./TablePagination.module.scss";

const LIMIT = 10;

export const TablePagination: React.FC<{
  total: number;
  page: number;
  onChange: () => void;
}> = ({ total, page, onChange }) => {
  const pageAmount = Math.ceil(total / LIMIT);

  return (
    <div className={styles.pagination}>
      {Array.from({ length: pageAmount }, (_, index) => {
        return <span className={styles.item}>{index + 1}</span>;
      })}
    </div>
  );
};
