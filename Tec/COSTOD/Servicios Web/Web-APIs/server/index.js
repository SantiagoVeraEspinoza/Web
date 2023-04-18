// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
const mysql = require('mysql');
const path = require('path');
require('dotenv').config();

/*const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});*/

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));



app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server side!"});
});

app.get("/api/posts", (req, res) => {
  fs.readFile( __dirname + "/" + "posts.json", "utf8", (err, data) => {
    console.log( data );
    res.end( data );
  });
  /*pool.getConnection(function (err, connection) {
    if (err) {
      console.error(err);
    } else {
      connection.query(`
      SELECT * FROM posts;
      `, function (err, results, fields) {
        if (err) {
          res.status(500).send("No se pudo leer la base de datos.");
        } else {
          answer = JSON.stringify(results, null, 2);
          res.end(answer);
          console.log(res);
        }
        connection.release(); // <-- libera la conexión después de realizar la consulta
      });
    }
  });*/
});

app.post("/api/posts", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
  res.end( "Recibido!" );
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});