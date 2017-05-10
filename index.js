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

// let student_1 = new

all();
