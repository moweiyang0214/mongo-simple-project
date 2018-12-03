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

async function  createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'lei',
    tags: ['angular', 'frontend'],
    isPublished: true
  })
  const result = await course.save()
  console.log(result)
}

createCourse()