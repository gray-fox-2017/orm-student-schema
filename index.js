"use strict"
const db = require('./models')
const repl = require('repl');
let replServer = repl.start();

const callback_getAllData = (students) => {
  console.log('Student Data : ');
  students.forEach((x)=>{
    console.log(`ID : ${x.id}`);
    console.log(`Firstname : ${x.first_name}`);
    console.log(`Lastname : ${x.last_name}`);
    console.log(`Birthdate : ${x.birthdate}`);
    console.log(`Fullname : ${x.full_name}`);
    console.log(`Age : ${x.age}`);
    console.log("\n");
  });
}

replServer.context.getData = db.Student.getAllData;
replServer.context.createStudent = db.Student.insertStudent;

/*
TEST CASE

getData(
  (students) => {
    console.log('Student Data : ');
    students.forEach((x)=>{
      console.log(`ID : ${x.id}`);
      console.log(`Firstname : ${x.first_name}`);
      console.log(`Lastname : ${x.last_name}`);
      console.log(`Birthdate : ${x.birthdate}`);
      console.log(`Fullname : ${x.full_name}`);
      console.log(`Age : ${x.age}`);
      console.log("\n");
    });
  }
)

createStudent(
  {
    first_name: 'Lycaa',
    last_name : 'Lycaa',
    birthdate:new Date('2000-03-30'),
    phone:"08161676540",
    email:'lycaa@gmail.com',
    tinggi:20,
    createdAt: new Date(),
    updatedAt: new Date()
  }
);

*/


