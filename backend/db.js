const Pool = require("pg").Pool;

// Adjust this object
const pool = new Pool({
  // Put here your user in postgres
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "new_db",
});

module.exports = pool;
