const mongoose = require('mongoose');
const Schema = mongoose.Schema({
   name : {
    type : String,
    required : true,
    },
    email :{
        type : String,
        required : true,
    },
    number :{
        type : String,
        required : true,
    },
    link : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model('work',Schema);