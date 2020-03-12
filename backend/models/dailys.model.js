const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dailysSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    sparse : true,
    minlength: 3
  },
}, {
  timestamps: true,
})

const Dailys = mongoose.model('Dailys', dailysSchema)

module.exports = Dailys