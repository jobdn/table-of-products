const db = require("../db");
const constants = require("../constants/products.constants");
class ProductController {
  constructor() {}
  async createProduct(req, res) {
    const { date, name, amount, distance } = req.body;

    // TODO: You need to change the name of the table with data
    const queryText = `insert into product (date, name, amount, distance) values($1, $2, $3, $4) returning *`;

    const values = [date, name, amount, distance];

    const newProduct = await db.query(queryText, values);

    res.json(newProduct.rows[0]);
  }

  async getProducts(req, res) {
    // TODO: You need to change the name of the table with data
    let queryResult = {};
    const { page, colType, col, condition, filterValue = "" } = req.query;

    if (colType === "int") {
      if (condition === "like") {
        queryResult = await db.query(
          `select * from product where cast(${col} as varchar) ${condition} '%${filterValue}%'`
        );
      } else {
        if (parseFloat(filterValue)) {
          queryResult = await db.query(
            `select * from product where ${col} ${condition} ${filterValue}`
          );
        } else {
          queryResult.rows = [];
        }
      }
    } else if (colType === "varchar") {
      if (condition === "like") {
        const queryString = `select * from product where ${col} ${condition} '%${filterValue}%'`;
        queryResult = await db.query(queryString);
      } else {
        const queryString = `select * from product where ${col} ${condition} '${filterValue}'`;
        queryResult = await db.query(queryString);
      }
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
