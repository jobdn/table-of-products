import axios from "axios";
import React from "react";

interface ITableItem {
  date: Date;
  name: string;
  amount: number;
  length: number;
}

const App: React.FC = () => {
  const [data, setData] = React.useState<ITableItem[]>();

  React.useEffect(() => {
    axios("/api").then(({ data }) => setData(data));
  }, []);

  return (
    <div>
      {data?.length ? (
        "Loading..."
      ) : (
        <ul>
          {data?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
