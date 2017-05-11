"use strict"
const db = require('./models');
const repl = require('repl');

let replServer = repl.start('>> ');

var all = db.Student.getAllData(function(Students){
  Students.forEach(function(Student){
      console.log(`id        : ${Student.id}`)
      console.log(`First Name: ${Student.first_name}`);
      console.log(`Last Name : ${Student.last_name}`);
      console.log(`gender    : ${Student.gender}`);
      console.log(`Birtdate  : ${Student.birtdate}`);
      console.log(`Email     : ${Student.email}`);
      console.log(`phone     : ${Student.phone}`);
      console.log(`tinggi_badan: ${Student.tinggi_badan}`);
      console.log(`Age       : ${Student.getAge()}\n`);
  });
});

function create(){
  db.Student.create({
    first_name: 'gogon',
    last_name: 'depok' ,
    gender:'pria' ,
    birtdate: '1988-04-18',
    email: 'gogon@yahoo.com',
    phone: '1234577834' ,
    tinggi_badan: 165})
  .then(Student => console.log('data already added!'))
  .catch(err => console.log(err.message))
}

replServer.context.create = create;
