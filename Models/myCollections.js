const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    samples: [
        {
            name: String,
            preview: String
        }
    ],
    user_email: {
        type: String,
        required: true
    }
});

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection