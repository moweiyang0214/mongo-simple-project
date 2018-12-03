// ssh-keygen -t rsa
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(()=> console.log('connected to MongoDb...'))
  .catch(err => console.error('could not connect to MongoDb', err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  data: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
})

// Classes, objects
const Course = mongoose.model('Course', courseSchema)

// async function  createCourse() {
//   const course = new Course({
//     name: 'Angular Course',
//     author: 'lei',
//     tags: ['angular', 'frontend'],
//     isPublished: true
//   })
//   const result = await course.save()
//   console.log(result)
// }

async function getCourses() {
  const course = await Course
    .find({ isPublished: true, tags: 'backend'})
    .sort({price: 1})
    .select({name: 1, author: 1, price: 1})
  console.log(course)
  // /api/course?pageNumber=2&pageSize=10

  // const pageNumber = 2
  // const pageSize = 10

  // const courses = await Course
  // .find()
  // .skip((pageNumber - 1)* pageSize)
  // .limit(pageSize)
  // .sort({name: 1})
  // .select({ name: 1, tags: 1})
  // console.log(courses)
  // comparasion: eq(equal) 
  // ne: not equal 
  // gt: greater than 
  // gte: greater than or equal to 
  // lt: less than 
  // lte: less than or equal to
  // in 
  // nin(not in)

  // .find({
  //   author: 'lei',
  //   isPublished: true
  // })
  // .find({price : {$gte: 10} })
  // .find({price: {$gte: 10, $lte: 20} })
  // .find({ price: {$in: [10,15,20]} })
  // 
  // .find()
  // .or([ {author: 'lei'}, {isPublished: true}])
  // .and([{},{}])
  // using regular expression

  // // starts with lei
  // .find({author: /^lei/})

  // // ends with i
  // /find({author: /lei$/i })

  // // contains lei
  // .find({author: /.*lei.*/i })
}

getCourses()