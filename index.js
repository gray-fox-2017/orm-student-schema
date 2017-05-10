"use strict"

const db = require('./models')

// function getAll() {
//   db.students.findAll()//{
//   //   where: {id: 5}
//   // })
//   .then(students => {
//     students.forEach(students => {
//       console.log(students.getFullname());
//       //console.log(students[0].getFullname());
//     })
//   })
// }

function getAge() {
  db.students.findAll()
  .then(students => {
    students.forEach(students => {
      console.log(students.getAge());
    })
  })
}
var all = db.students.getAllData(function(students) {
  students.forEach(function(students) {
    console.log(`ID         :${students.id}`);
    console.log(`FIRS TNAME :${students.first_name}`);
    console.log(`LAST NAME  :${students.last_name}`);
    console.log(`GENDER     :${students.gender}`);
    console.log(`BIRTHDAY   :${students.birthday}`);
    console.log(`EMAIL      :${students.email}`);
    console.log(`PHONE      :${students.phone}`);
    console.log(`HEIGHT     :${students.height}`);
    console.log(`FULL NAME  :${students.full_name}`);
    console.log('----------------------------------------------------------');
    //console.log(`AGE        :${this.age()}`);
    //console.log(this.getAge());
  })
  console.log('\n');

})
// getAll()
//
//console.log("AGE      :"+getAge());
//getAge()


function addPerson() {
  //let tes = parseInteger()
  db.students.create({
    first_name : 'erwin',
    last_name  : 'joko',
    gender     : 'l',
    birthday   : new Date('1993-08-26'),
    email      : 'test122@gmail.com',
    phone      : 23232323,
    height     : 120,
    createdAt  : new Date(),
    updatedAt  : new Date()
  })
  .then(students=> {
    console.log('success');
  })
  .catch(err => {
    console.log("errornya : "+err.message);
  })
}


//addPerson()

const repl = require('repl')

let replServer = repl.start('>>')
replServer.context.getAge = getAge()
replServer.context.addPerson = addPerson
