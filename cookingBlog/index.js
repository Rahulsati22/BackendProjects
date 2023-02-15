const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 8000;
const path = require("path");
const mongoose = require("./config/mongoose");
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.set("layout", "./layouts/main");
app.use("/", require("./routes/routes"));
const Category = require('./models/recipe');

app.listen(port, async function (error) {
  if (error) {
    console.log("error");
  }
   
  console.log(`successfully running on the port ${port}`);
});
