"use strict";

// IMPORT PACKAGES
var express = require("express"); // INITIALIZE EXPRESS


var app = express(); // REQUIRE MYSQL

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "myjs123",
  database: "react-sql-db"
});
connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
}); // IMPORT ROUTERS

require("./routes/routes")(app); // PORT NUMBER


var PORT = process.env.PORT || 3000; // LOCALHOST: PORT(above)

app.listen(PORT, function () {
  console.log("App is listening on PORT ".concat(PORT));
});