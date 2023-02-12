const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    title : String,
    text : String,
    url : String,
});

module.exports = mongoose.model('section1', Schema);