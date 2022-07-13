const db = require("../db");

class ProductController {
  constructor() {}
  async createProduct(req, res) {
    const { date, name, amount, distance } = req.body;

    const queryText = `insert into product (date, name, amount, distance) values($1, $2, $3, $4) returning *`;

    const values = [date, name, amount, distance];

    const newProduct = await db.query(queryText, values);

    res.json(newProduct.rows[0]);
  }

  async getProducts(req, res) {
    const queryResult = await db.query("select * from product");
    const LIMIT = 10;
    const { page, search } = req.body;

    const totalProducts = queryResult.rowCount;
    const products = queryResult.rows;

    setTimeout(() => {
      res.json({ products, totalProducts });
    }, 1000);
  }
}

module.exports = new ProductController();
