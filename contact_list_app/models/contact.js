const mongoose = require('mongoose');
const connect = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    phone :{
        type : String,
        required : true
    }
})
const Contact = mongoose.model('Connect',connect);
module.exports = Contact;