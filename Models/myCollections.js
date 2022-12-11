const mongoose = require('mongoose');
const Sample = require('./samples.js')

const collectionSchema = new mongoose.Schema({
    name: String,
    image: String,
    samples: [Sample.schema]
});

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection