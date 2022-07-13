import React from "react";
import { useTypedSelector } from "../../hooks/redux";
import { selectProducts } from "../../redux/reducers/products/selectors";

export const Table: React.FC = () => {
  const { products, isLoading, error } = useTypedSelector(selectProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date.toString()}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
