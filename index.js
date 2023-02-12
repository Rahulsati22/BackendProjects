const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');
const path = 8000;
const connection = require('./config/mongoose');
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('layouts','./views/layout');
app.set('views','./views');
app.use(express.static('./static'));
app.use(expressLayouts);
app.use('/',require('./routes/routes'));
app.listen(8000, function(error){
    if(error){
        console.log('error');
        return;
    }
    console.log('successfully connected');
})