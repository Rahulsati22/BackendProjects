const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');
const Schema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
     
})

module.exports = mongoose.model('user_article', Schema);