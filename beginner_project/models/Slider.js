const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title : String,
    subTitle:String,
    url:String,
})

module.exports = mongoose.model('slider', Schema);