// ssh-keygen -t rsa
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true })
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

const Course = mongoose.model('Course', courseSchema)

// async function getCourses() {
//   const course = await Course
//     .find({ isPublished: true, tags: {$in: ['backend', 'frontend']}})
//     .sort({price: 1})
//     .select({name: 1, author: 1, price: 1})
//   console.log(course)
// }

// getCourses()

// async function updateCourse(id) {
  // approach: query first
  // findById()
  // Modify its properties
  // save()
  // -----------------------------------------
  // const course = await Course.findById(id)
  // if(!course) return

  // course.set({
  //   isPublished: true,
  //   author: 'Another Author'
  // })

  // const result = await course.save()
  // console.log(result)
  // ----------------------------------------

  // approach: update first
  // update directly
  // optionally: get the updated document
//   const result = await Course.update({_id: id}, {
//     $set: {
//       author: 'mosh',
//       isPublished: false
//     }
//   })
//   console.log(result)


// }

// updateCourse('5a68fdd7bee8ea64649c2777')

async function removeCourse(id){
  // const result = await Course.deleteOne({_id: id})
  const result = Course.findByIdAndRemove(id)
  console.log(result)
}

removeCourse('5a68fdd7bee8ea64649c2777');