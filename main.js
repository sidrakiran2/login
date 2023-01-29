const express = require('express');
const app = express();
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sidra@@1122",
    database: "sidra"
});

connection.connect();


app.use(express.static(__dirname + '/login'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login/index.html');
});

app.listen(5050, () => {
  console.log('Server listening on port 5050');
});




