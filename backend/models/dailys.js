const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dailysSchema = new Schema({
  dailys: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
})

const Dailys = mongoose.model('Dailys', dailysSchema)

module.exports = Dailys