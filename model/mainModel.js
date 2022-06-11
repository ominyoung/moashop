const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    gen:String,
    rank:String,
    name:String,
    age:String,
    category:String,  
    src:String  
})

const Shop = mongoose.model('Shop',schema);

module.exports = Shop;