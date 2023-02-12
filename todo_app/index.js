const express = require("express");
const app = express();
const port = 8000;
const path = require("path");   
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("./static"));
const Task = require("./config/mongoose");
const Schema = require("./models/Schema");
app.get("/", function (request, response) {
  Schema.find({}, function(error, contacts){
    if (error){
      console.log('error');
      return;
    }
    console.log(contacts);
    return response.render('home', {
      title : "Rahul Sati's Todo",
      task : contacts, 
    })
  })
});
app.post('/create', function(request, response){
  console.log(request.body);
      Schema.create({
        task : request.body.task,
        type : request.body.type,
        date : request.body.date
      }, function(error, contact){
        if (error){
          console.log('error');
          return;
        }
        console.log(contact);
      });
      return response.redirect('/');
})
app.get('/delete', function(request, response){
  let id = request.query.id;
  Schema.findByIdAndDelete(id, function(error){
    if (error){
      console.log('error');
      return;
    }
  });
  return response.redirect('/');
})
app.listen(port, function (error) { 
  if (error) {
    console.log("error");
    return;
  }
  console.log("succesfully connected");
});
