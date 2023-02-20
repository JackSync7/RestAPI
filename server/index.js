const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  const sql = `insert into employe (name, age, country, position, wage) VALUES ('${name}', ${age}, '${country}', '${position}', ${wage})`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Berhasil ditambahkan");
    }
  });
});

app.listen(3001, () => {});