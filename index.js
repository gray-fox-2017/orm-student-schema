"use strict"

const db = require('./models')

// function getAll() {
//   db.students.findAll()//{
//   //   where: {id: 5}
//   // })
//   .then(students => {
//     students.forEach(students => {
//       console.log(students.getFullname());
//       //console.log(students[0].getFullname());
//     })
//   })
// }

function getAge() {
  db.students.findAll()
  .then(students => {
    students.forEach(students => {
      console.log(students.getAge());
    })
  })
}
var all = db.students.getAllData(function(students) {
  students.forEach(function(students) {
    console.log(`ID         :${students.id}`);
    console.log(`FIRS TNAME :${students.first_name}`);
    console.log(`LAST NAME  :${students.last_name}`);
    console.log(`HEIGHT     :${students.height}`);
    console.log(`FULL Name  :${students.full_name}`);
  })
  console.log('\n');
})
// getAll()
//
getAge()