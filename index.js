"use strict"
const sqlite3 = require('sqlite3').verbose();
const db = require('./models');

let all = () => db.Students.getAllData(function(students){
  students.forEach(function(student) {
    console.log(student.id);
    console.log(student.firstname);
    console.log(student.lastname);
    console.log(student.fullname);
    console.log(student.getAge());
  })
})

let insert_student = () => {
  db.Students.create({
    "firstname" : "Bambang",
    "lastname" : "Mulyadi",
    "birthdate" : new Date('1995-12-13'),
    "email" : "bamul.com",
    "phone" : "086579",
    "height" : "147"
  })
  .then(student => {
    console.log(JSON.stringify(student));
    // console.log(JSON.stringify(student.toJSON(),null, 2));
  })
  .catch(err => {
    console.log(db.Students.msg);
    console.log("error");
  })
  return console.log("Insert Student");
}

// all();
insert_student();
