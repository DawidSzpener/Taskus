const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasksSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
})

const Tasks = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks