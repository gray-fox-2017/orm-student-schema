"use strict"

const db = require ('./models')
const sqlite3 = require('sqlite3').verbose()
const repl = require('repl')
const replServer = repl.start('> ')

function age(){
  db.student.findAll()
  .then(student =>{
    student.forEach((data)=>{
      console.log(data.getFullName()+ " = " + data.getAge());
    })
  })
}

var all = db.student.getAllData(function(students){
  students.forEach(function(student){
    console.log(`\nID: ${student.id}`);
    console.log(`First_Name: ${student.firstname}`);
    console.log(`Last_Name: ${student.lastname}`);
    console.log(`Full_Name: ${student.full_name}`);
    console.log(`Height: ${student.height}\n`);
  })
})

 age()
