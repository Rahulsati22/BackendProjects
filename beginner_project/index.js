const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const route = require('./routes/route');
const mongo = require('./config/mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded(
    {
        extended:true,
    }
));
app.use('', route);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('./statics'));
app.listen(port, function(error){
    if (error){
        console.log('error occured');
        return;
    }
    console.log('successfully connected to the port');
})