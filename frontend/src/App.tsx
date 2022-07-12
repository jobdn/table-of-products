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
    axios("/api").then(({ data }) => console.log(data));
  }, []);
  return <div>App</div>;
};

export default App;
