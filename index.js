"use strict"

const db = require ('./models')
const repl = require('repl')
const replServer = repl.start('> ')

function fullnameage(){
  db.student.findAll()
  .then(student =>{
    student.forEach((data)=>{
      console.log("\n" + data.getFullName()+ " Age = " + data.getAge());
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

 function add(firstname1,lastname1,gender1,birthday1,email1,phone1,height1){
 db.student.create({firstname:firstname1,lastname:lastname1,gender:gender1,birthday:birthday1,email:email1,phone:+phone1,height:height1})
.then(student =>{
  console.log(`${student.firstname} Added!`);
})
.catch(err =>{
  console.log(err.message);
})  
}

 replServer.context.fullnameage = fullnameage
 replServer.context.add = add
 // 'acong','lailai','bencing',new Date('1800-12-1'),'salah','02222',120