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
  async getProducts(_, res) {
    const allProducts = await db.query("select * from product");
    console.log(allProducts);
    res.json(allProducts.rows);
  }
}

module.exports = new ProductController();
