"use strict"

"use strict"

var db = require('./models')
var repl = require('repl');
var replServer = repl.start({prompt: ">>"});


function add(obj){
  let createAt = new Date();
  let updateAt = new Date();
  db.Student.create({
    first_name: obj.first_name,
    last_name: obj.last_name,
    birth_date: obj.birth_date,
    gender: obj.gender,
    email: obj.email,
    height: obj.height,
    phone: obj.phone
  }).then(()=>{
    console.log(`Data Added`);
  }).catch((err)=>{
    console.log(err);
  })
}

var all = () =>{db.Student.getAllData(function(students){
  students.forEach(function(student){
    console.log(`\nid : ` + student.id);
    console.log(`first name : ` + student.first_name);
    console.log(`last name : ` + student.last_name);
    console.log(`full name : ` + student.full_name);
  })
})
}

var getAllStudentAge = () =>{db.Student.getAllAge(function(rows){
  rows.forEach(function(student){
  console.log(`${student.full_name} was ${student.age} years old, birth_date is ${student.birth_date}`);
  })
})
}


let help = () =>{
  console.log(`
    =============> FORMAT INPUT <==============
    add({first_name : 'first_name', last_name : 'last_name', birth_date : 'birth_date', gender : 'gender', email : 'email', height: 'height', phone: 'phone'})
    all()
    getAllStudentAge()`);
}

replServer.context.help = help()
replServer.context.help = help
replServer.context.add = add;
replServer.context.all = all;
replServer.context.getAllStudentAge = getAllStudentAge;
