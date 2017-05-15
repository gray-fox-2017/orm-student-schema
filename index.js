const db = require('./models');
const repl = require('repl');


var all = () => {
  db.Student.getAllData(students => {

    for (let i = 0; i < students.length; i++) {
      let fullname = students[i].getFullName();
      let age = students[i].getAge();
      console.log('\n');
      console.log('Id: ' + students[i].id);
      console.log('Firstname: ' + students[i].first_name);
      console.log('Lastname: ' + students[i].last_name);
      console.log('Birthdate: ' + students[i].birthdate);
      console.log('Fullname: ' + fullname);
      console.log('Age: ' + age);

    }
  });
}

let insertStudent = (first_name,last_name,birthdate,height,email,phone) => {
  db.Student.create({'first_name':first_name,'last_name':last_name,'birthdate':birthdate,'email':email,'height':height,'phone':phone})
  .then (student => {
    console.log(JSON.stringify(student))
  })
  .catch (err =>{
    console.log(err.message);
  });
  }

var replServer = repl.start({
  prompt: '$ '
})
replServer.context.all = all
replServer.context.insertStudent = insertStudent
//test Validation
// insertStudent('test','test','1991-10-2',150,'asdfgmail.com','.....')
