const Pool = require("pg").Pool;
const pgKey = require("../config");

const pool = new Pool({
  user: "postgres",
  password: pgKey,
  host: "localhost",
  port: 5432,
  database: "apptracker",
});

module.exports = pool;
