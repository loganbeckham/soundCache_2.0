const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    image: String,
    samples: [
        {
            name: String,
            preview: String
        }
    ]
});

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection