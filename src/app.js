const express = require("express");
const app = express();
const hbs = require("hbs");
const newsR = require("./routes/newsR");
require("dotenv").config();
const port = process.env.PORT || 3400;


// Template engine setup
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// Helper for formatting dates using the "moment" library
const moment = require('moment');
hbs.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
});

// Serve static files from the "public" directory
app.use("/static", express.static("public"));

// Use the "newsR" route to handle news-related requests
app.use("/", newsR);

// Start the server
app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
