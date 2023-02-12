const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    email : String,
    phone : String,
    query : String,
});

module.exports = mongoose.model('documents', Schema);