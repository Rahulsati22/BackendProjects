const express = require('express');
const app = express();
const port = 8000;
const mongo = require('./config/mongoose');
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');
app.use('/articles',require('./routes/articles'));
app.get('/', function(request,response){
    const article = require('./models/articles');

    article.find({},function(error,user){
        if (error){
            console.log('error');
            return;
        }
        else{
            return response.render('./articles/index',{
                articles : user,
             });
        }
    })
    
})
app.listen(port, function(error){
    if (error){
    console.log('error');
    return;
    }
    console.log('conected');
})