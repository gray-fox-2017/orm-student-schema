"use strict"
const folder = require('./models')
const repl = require('repl');
const replServer = repl.start({prompt:'ORM-Student-Schema>>> '})


function getAllStudent(){
  let callback = (rows)=>{
    rows.forEach((row)=>{
      console.log(row.id);
      console.log(row.firstName);
      console.log(row.lastName);
      console.log(row.getFullName());
    })
  }
  folder.Student.getAllData(callback)
}

function getAllStudentAge(){
  let callback = (rows)=>{
    rows.forEach((row)=>{
      console.log(row.firstName);
      console.log(row.getAge());
    })
  }
  folder.Student.getAllData(callback)
}

let insertStudent = (firstname,lastname,birthdate,email,phone,height) => {
    folder.Student.create({
      "firstName" : firstname,
      "lastName" : lastname,
      "birthDate" : birthdate,
      "email" : email,
      "phone" : phone,
      "height" : height
    })
    .then(() => {
      console.log('success!');
    })
    .catch((err) => {
      console.log(err.message);
    })
}

function showAll(){
  let callback = (rows)=>{
    rows.forEach((row)=>{
      console.log(row.firstName)
      console.log(row.lastName)
      console.log(row.birthDate)
      console.log(row.email)
      console.log(row.phone)
      console.log(row.height)
    })
  }
  folder.Student.getAllData(callback)
}





replServer.context.getAllStudent = getAllStudent
replServer.context.getAllStudentAge = getAllStudentAge
replServer.context.insertStudent = insertStudent
replServer.context.showAll = showAll

