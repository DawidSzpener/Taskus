const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tasksSchema = new Schema({
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

const Tasks = mongoose.model('Tasks', tasksSchema)

module.exports = Tasks