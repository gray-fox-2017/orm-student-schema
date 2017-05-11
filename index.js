"use strict"
const db = require('./models')
const repl = require('repl')
let replServer = repl.start({
  prompt: '>>',
  input: process.stdin,
  output: process.stdout
})

function addData(first_name, last_name, gender, email, height, phone, birthdate){
  let createdAt = new Date()
  let updatedAt = new Date()
  db.Student.create({
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    email: email,
    height: height,
    phone: phone,
    birthdate: birthdate,
    createdAt: createdAt,
    updatedAt: updatedAt
  }).then(()=> {
    console.log(`${first_name}'s data inserted!`)
  }).catch((err)=> {
    console.log(err.message);
  })
}

function getAllStudentData() {
  db.Student.getAllData((rows)=> {
    rows.forEach((row)=> {
      console.log(row.id)
      console.log(row.first_name);
      console.log(row.last_name);
      console.log(row.full_name);
    })
  })
}

function getAllStudentAge() {
  db.Student.getAllAge((rows)=> {
    rows.forEach((row)=> {
      console.log(`${row.full_name} was ${row.age} years old, birthdate is ${row.birthdate}`);
    })
  })
}

function help() {
  console.log(`==================================`);
  console.log(`          input data              `);
  console.log(`==================================`);
  console.log(`addData(firstname(string), lastname(stirng), gender(string), email(string), height(int), phone(string), birthdate(string))`);
  console.log(`getAllStudentData()`);
  console.log(`getAllStudentAge()`);
}

replServer.context.help = help();
replServer.context.addData = addData;
replServer.context.getAllStudentData = getAllStudentData;
replServer.context.getAllStudentAge = getAllStudentAge;
