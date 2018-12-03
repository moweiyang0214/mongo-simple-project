const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
  .then(()=> console.log('connected to MongoDb...'))
  .catch(err => console.error('could not connect to MongoDb', err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  data: { type: Date, default: Date.now },
  isPublished: Boolean
})

// Classes, objects
const Course = mongoose.model('Course', courseSchema)
const course = new Course({
  name: 'Node.js Course',
  author: 'lei',
  tags: ['node', 'backend'],
  isPublished: true
})
