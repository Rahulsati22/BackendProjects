const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts_list_db2');
const connection = mongoose.connection;

connection.on('error', console.error.bind('not able to connect'));
connection.once('open', function(){
    console.log('database is successfully created');
})