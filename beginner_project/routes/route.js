const express = require('express');
const app = express();
const routes = express.Router();
const Schema = require('../models/Schema');
const Slider = require('../models/Slider');
const Services = require('../models/Service');
const Form = require('../models/Form');
const Services1 = require('../models/Services1');
const Services2 = require('../models/Services2');
const About = require('../models/About');
routes.get('/', async function(request, response){
    const details = await Schema.findOne({"_id":"639ebc32d93a904a09477aaf"});
    const slides = await Slider.find()
    const services = await Services.find()
    const servicess1 = await Services1.find()
    const servicess2 = await Services2.find()
    const about = await About.find()
    console.log(servicess1);
    return response.render('home', {
        title : "Coding website",
        details : details,
        slides : slides,
        services : services,
        services1 : servicess1,
        services2 : servicess2,
        about : about
    });
})
routes.post('/form', function(request, response){
    console.log(request.body);
    try{
    Form.create(request.body);
    }
    catch(e){
        console.log(e);
    }
    return response.redirect('/');
})
module.exports = routes;