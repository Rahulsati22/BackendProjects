const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    about : String, 
    para : String,
})

module.exports = mongoose.model('about',Schema);