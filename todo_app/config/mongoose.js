const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rahulSati_todo");
const db = mongoose.connection;
db.on("error", console.error.bind("not able to connect to mongodb"));
db.once("open", function () {
  console.log("successfully connected to database");
});
