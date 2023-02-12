const mongoose = require('mongoose');
const Schema = require('../models/Schema');
const Slider = require('../models/Slider');
const Service = require('../models/Service');
const Service1 = require('../models/Services1');
const Service2 = require('../models/Services2');
const About = require('../models/About');
mongoose.connect('mongodb://localhost:27017/freelance', function(){
     About.create({
        about : "About Us",
        para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem quae aut, veritatis tempora atque dolor saepe officia neque molestiae! Aliquam excepturi sit nihil officiis numquam. Velit labore explicabo provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem quae aut, veritatis tempora atque dolor saepe officia neque molestiae! Aliquam excepturi sit nihil officiis numquam. Velit labore explicabo provident"
     })
});
const check = mongoose.connection;
check.on('error',console.error.bind('not able to connect to mongodb'));
check.once('open', function(){
    
    console.log('successfully connected to mongodb');
})

