const db = require("../db");
const constants = require("../constants/products.constants");
class ProductController {
  constructor() {}
  async createProduct(req, res) {
    const { date, name, amount, distance } = req.body;

    // TODO: change table name
    const queryText = `insert into product (date, name, amount, distance) values($1, $2, $3, $4) returning *`;

    const values = [date, name, amount, distance];

    const newProduct = await db.query(queryText, values);

    res.json(newProduct.rows[0]);
  }

  async getProducts(req, res) {
    let queryResult;
    const { page, search } = req.query;

    // TODO: change table name
    if (search) {
      queryResult = await db.query("select * from product where ");
    } else {
      queryResult = await db.query("select * from product");
    }

    const totalProducts = queryResult.rowCount;
    const start = (page - 1) * constants.LIMIT;
    const end = page * constants.LIMIT;
    const products = queryResult.rows.slice(start, end);

    setTimeout(() => {
      res.json({ products, totalProducts });
    }, 1000);
  }
}

module.exports = new ProductController();
