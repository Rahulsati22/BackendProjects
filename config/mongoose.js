const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e-learning-website');
const connection = mongoose.connection;
connection.on('error', console.error.bind('error in connecting to mongodb'));
connection.once('open', function(){
    console.log('successfully connected to mongodb');
})