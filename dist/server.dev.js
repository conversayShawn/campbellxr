"use strict";

// IMPORT PACKAGES
var express = require('express');

var app = express(); // IMPORT ROUTERS

require("./routes/routes")(app); // PARSE REGISTERED MIDDLEWARE
// app.use(express.urlencoded({extended: true}))
// PARSE HTTP REQUEST FROM JSON STRING
// app.use(express.json())
// USE `./client/build` DIRECTORY TO HOST STATIC CSS AND IMAGE FILES
// app.use(express.static(`${__dirname}/client/build`))
// PREFIX FOR ALL ROUTERS
// app.use('/api/', JournalRouter)

/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /... routes.
 */
// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })
// PORT NUMBER


var PORT = process.env.PORT || 3000; // LOCALHOST: PORT(above)

app.listen(PORT, function () {
  console.log("App is listening on PORT ".concat(PORT));
});