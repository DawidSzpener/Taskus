const router = require('express').Router()
let Tasks = require('../models/tasks.model')

router.route('/').get((req, res) => {
  Tasks.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const text = req.body.text

  const newTask = new Tasks({text})

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error:' + err))
})

module.exports = router