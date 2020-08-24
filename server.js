// IMPORT PACKAGES
const express = require("express")

// INITIALIZE EXPRESS
const app = express()

// REQUIRE MYSQL
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "myjs123",
    database: "react-sql-db"
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection)
})

// IMPORT ROUTERS
require("./routes/routes")(app)

// PORT NUMBER
const PORT = process.env.PORT || 3000

// LOCALHOST: PORT(above)
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
