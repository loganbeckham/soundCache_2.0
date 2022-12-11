const mongoose = require('mongoose');
// const Samples = require('./samples.js')

const collectionSchema = new mongoose.Schema({
    name: String,
    image: String,
    samples: [
        { 
            name: String,
            preview: String
        }
    ],
});

const Collection = mongoose.model('collection', collectionSchema)
module.exports = Collection