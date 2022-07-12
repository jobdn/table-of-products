const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/api", (req, res) => {
  res.json({
    table: [
      {
        date: "2020/21/12",
        name: "NAME",
        amount: 120,
        length: 20,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT} port!`);
});
