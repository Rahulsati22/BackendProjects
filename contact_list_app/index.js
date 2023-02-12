const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const path = require('path');
const { title } = require('process');
const Contact = require('./models/contact');
let cL = [];
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.get('/', function(request, response){
    Contact.find({}, function(error,contacts){
        if (error){
            console.log('error in finding contacts in db');
            return;
        }
        return response.render('contactList',{
            title : 'my contact list',
            contact_list : contacts
        });
    })
   
})
app.post('/create', function(request,response){
    Contact.create({
        name : request.body.name,
        phone : request.body.phone,
    }, function(error, newContact){
        if (error){
            console.log('error occurred in setting the databse');
            return;
        }
        console.log(newContact);
    });
    return response.redirect('/');
})
app.get('/delete', function(request,response){
    let id =  request.query.id;
    Contact.findByIdAndDelete(id, function(error){
        if (error){
            console.log('error in deleting the object from database');
            return;
        }
    })
    return response.redirect('/');
})
app.listen(port, function(error){
    if (error){
        console.log('eroor');
        return;
    }
    console.log('connected');
})