const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "arief@123",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

pool.connect()
   .then(() => {
    console.log("Your postgres sql connected successfully")
   })
   .catch((err) => {
    console.error(err.message)
   })

module.exports = pool;