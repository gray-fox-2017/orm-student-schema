"use strict"

const db = require('./models');
const repl = require('repl');

let replServer = repl.start({
  prompt:`~ `,
  input: process.stdin,
  output: process.stdout
});

const callback_getAllData = (students) => {
  students.forEach((student) => {
    console.log(`\nThis is the data for student with ID = ${student.id}`);
    console.log(`Full Name: ${student.full_name}`);
    console.log(`First Name: ${student.first_name}`);
    console.log(`Last Name: ${student.last_name}`);
    console.log(student.getAge());
    console.log(`Birthday: ${student.birthday}`);
    console.log(`Email: ${student.email}`);
    console.log(`Phone: ${student.phone}`);
    console.log(`Height: ${student.height}\n`);
  })
}
db.Student.getAllData(callback_getAllData);

function createStudent(object) {
    db.Student.create(object)
    .then(() => {
          console.log("Data created")
        })
    .catch(err => {
          console.log(err.message);
        })
}

//createStudent({first_name: "Ibnu", last_name: "Sina", gender: "Male", birthday: new Date(1987,11,16), email: "ibnu@sina.com", phone: "081219000002", height: 170})

replServer.context.student = db.Student;
replServer.context.createStudent = createStudent;
