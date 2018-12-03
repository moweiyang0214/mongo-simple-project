const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
  .then(()=> console.log('connected to MongoDb...'))
  .catch(err => console.error('could not connect to MongoDb', err))