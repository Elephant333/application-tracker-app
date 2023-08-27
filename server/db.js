const Pool = require("pg").Pool;
const pgKey = require("../config");

const pool = new Pool({
  user: "postgres",
  password: pgKey,
  host: "localhost",
  port: 5432,
  databse: "apptracker"
})

module.exports = pool;
