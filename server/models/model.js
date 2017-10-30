var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = new mongoose.Schema({
   title: {type: String},
    desc: {type: String},
    name: {type: String},
    created_at    : { type: Date, required: true, default: Date.now }
    
})

  var Item = mongoose.model('Item', ItemSchema);