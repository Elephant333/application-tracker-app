const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //allows us access to req.body

//ROUTES//

//create an applicaiton

app.post("/applications", async (req, res) => {
  try {
    const { company } = req.body;
    const newApp = await pool.query(
      "INSERT INTO applications (company) VALUES($1) RETURNING *",
      [company]
    );
    res.json(newApp.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all applications

app.get("/applications", async (req, res) => {
  try {
    const allApps = await pool.query("SELECT * FROM applications");
    res.json(allApps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get an application

app.get("/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const app = await pool.query(
      "SELECT * FROM applications WHERE app_id = $1",
      [id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update an application

app.put("/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { company } = req.body;
    const updateTodo = await pool.query(
      "UPDATE applications SET description = $1 WHERE app_id = $2",
      [company, id]
    );
    res.json("Application was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete an application

app.delete("/applications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM applications WHERE app_id = $1",
      [id]
    );
    res.json("Application was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
