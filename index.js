"use strict"

var db = require('./models')

function allData() {
  db.Student.getAllData(callback)
}

function callback(students) {
  students.forEach((student) => {
    console.log("id : ",student.id);
    console.log("first: ",student.first_name);
    console.log("last name: ",student.last_name);
    console.log("full name: ",student.full_name);
    console.log("age : ", student.getAge());
    console.log("\n");
  })
}

allData()
