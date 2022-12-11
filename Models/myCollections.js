const mongoose = require('mongoose');
const Samples = require('./samples.js')

const collectionSchema = new mongoose.Schema({
    collectionName: String,
    collectionImage: String,
    collectionSamples: [Samples.schema],
});

const Collection = mongoose.model('collection', collectionSchema);
module.exports = Collection;