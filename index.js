"use strict"
const repl = require('repl');
const db = require('./models')

function getAll() {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(`ID     : ${student.id}`)
      console.log(`Name   : ${student.fullname}`);
      console.log(`Age    : ${student.getAge()}`);
      console.log(`Email  : ${student.email}`);
      console.log(`Height : ${student.height}`);
      console.log(`Phone  : ${student.phone}`);
    })
  })
}

function showName() {
  db.Student.getAllData(function(students) {
    students.forEach(function(student) {
      console.log(`Student ID   : ${student.id}`);
      console.log(`First Name   : ${student.firstname}`);
      console.log(`Last Name    : ${student.lastname}`);
      console.log(`Full Name    : ${student.fullname}`)
    })
  })
}

function createStudent(object) {
  db.Student.create(object)
  .then(() => {
    console.log("Data created")
  })
  .catch(err => {
    console.log(err.message);
  })
}

// createStudent({firstname: "Hakiem", lastname: "Noersedya", gender: "Male", email: "hakiem@google.com", phone: "0870910932023", height: 140})

var replServer = repl.start({
  prompt: ">> ",
  input: process.stdin,
  output: process.stdout
})
replServer.context.showName = showName;
replServer.context.getAll = getAll;
replServer.context.createStudent = createStudent;