const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/storyTellingApp');
const connection = mongoose.connection;
connection.on('error', console.error.bind('unable to connect to database'));
connection.once('open', function(){
    console.log('successfully connected to the database');
})
module.exports = mongoose;
