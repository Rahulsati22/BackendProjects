const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/RahulCookingBlog');
const connection = mongoose.connection;
connection.on('error', console.error.bind('error in connecting to database'));
connection.once('open', function(){
    console.log('successfull connected to the database');
});
