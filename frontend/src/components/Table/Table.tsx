import axios from "axios";
import React from "react";

interface ITableItem {
  id: number;
  date: Date;
  name: string;
  amount: number;
  distance: number;
}

export const Table: React.FC = () => {
  const [tableData, setTableData] = React.useState<ITableItem[]>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const { data } = await axios.get("/api/products");
      console.log(data);

      setTableData(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
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
            {tableData?.map((item) => (
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
      )}
    </div>
  );
};
