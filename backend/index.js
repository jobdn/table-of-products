const express = require("express");
const productRouter = require("./routes/product.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`Server is starting on ${PORT} port!`);
});
