const router = require('express').Router()
let Dailys = require('../models/dailys.model')

router.route('/').get((req, res) => {
  Dailys.find()
    .then(dailys => res.json(dailys))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const text = req.body.text
  
  const newDaily = new Dailys({text})

  newDaily.save()
    .then(() => res.json('Daily added!'))
    .catch(err => res.status(400).json('Error:' + err))
})

module.exports = router