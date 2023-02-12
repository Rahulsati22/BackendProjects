const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/article_document')
const connection = mongoose.connection;
connection.on('error',console.error.bind('error'));
connection.once('open', function(){
    console.log('successfully connected');
})