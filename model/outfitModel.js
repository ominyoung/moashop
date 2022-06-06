const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nickname:String,
    title:String,
    content:String,
    file:String,
})

const Outfit = mongoose.model('Outfit',schema);

module.exports = Outfit;