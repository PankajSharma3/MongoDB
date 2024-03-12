//CRUD operations
use("Students");
// Create database
db.createCollection("Courses")

//Inserting 1 element to database
db.Courses.insertOne({
    "name": "Pankaj",
    "age" : 25,
    "specialty":"Web development"
})

//Inserting more than 1 data
db.Courses.insertMany([
    {
      "name": "John",
      "age": 28,
      "specialty": "Mobile app development"
    },
    {
      "name": "Emma",
      "age": 30,
      "specialty": "Data science"
    },
    {
      "name": "Sophia",
      "age": 27,
      "specialty": "Machine learning"
    },
    {
      "name": "Alex",
      "age": 26,
      "specialty": "UI/UX design"
    },
    {
      "name": "David",
      "age": 29,
      "specialty": "Backend development"
    },
    {
      "name": "Lily",
      "age": 24,
      "specialty": "Frontend development"
    },
    {
      "name": "Michael",
      "age": 31,
      "specialty": "Cloud computing"
    },
    {
      "name": "Sarah",
      "age": 26,
      "specialty": "DevOps"
    },
    {
      "name": "Daniel",
      "age": 27,
      "specialty": "Cybersecurity"
    }
])


//Finding the data of the courses where age = 25 of all team members:
let a = db.Courses.find({
    "age":25
})
console.log(a);

//Update the database
db.Courses.updateOne(
   {"name":"Pankaj"},
   {"$set":{"name":"Ankush"}}
)

//Update all the database
db.Courses.updateMany(
    {"name":"Ankush"},
    {"$set":{"name":"Pankaj"}}
 )


//Deleting the record from the database
db.Courses.deleteOne(
{"name":"Michael"}
)

//Deleting multiple records from the database
db.Courses.deleteMany(
    {"name":"Michael"}
)
