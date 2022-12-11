const mongoose = require('mongoose')

const sampleSchema = mongoose.Schema({
    name: String,
    preview: String,
})

const Sample = mongoose.model('Sample', sampleSchema)
module.exports = Sample