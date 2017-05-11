"use strict"
const db = require ('./models')
const repl = require('repl')
const replServer = repl.start({ prompt : ' Type Your Choice : ' })

function fullNameStudent() {
  db.Students.findAll()
  .then(student => {
    student.forEach((data) =>{
      console.log("\n" +"Nama : "+ data.getFullName()+ ", Age = " + data.getAge());
    })
  })
}

function getDataAll() {
  db.Students.findAll()
  .then(murid=>{
    murid.forEach((datamurid)=>{
      console.log("No.ID " +datamurid.id);
      console.log("Nama Lengkap : " +datamurid.getFullName());
      console.log("First Name : " +datamurid.first_name);
      console.log("Last Name :" +datamurid.last_name);
      console.log("Tinggi Badan : "+datamurid.height);
      console.log("Umur : " +datamurid.getAge()+" Tahun");
      console.log();
    })
  })
}


function addStudent(first_name,last_name,email,height,birthdate,phone) {
  db.Students.create({
    first_name : first_name,
    last_name : last_name,
    email : email,
    height : height,
    birthdate : birthdate,
    phone : phone
  }).then(function(){
    console.log(`Data Berhasil dinput`);
  }).catch(function(err){
    console.log(err.message);
  })
}


function Help() {
  console.log("- fullNameStudent()");
  console.log("- getDataAll()");
  console.log("- addStudent()");
}
replServer.context.fullNameStudent = fullNameStudent
replServer.context.getDataAll = getDataAll
replServer.context.addStudent = addStudent
// addStudent('Dara','Manis','ambo@yahoo.com','170','1985-10-10','085611236728')
replServer.context.Help = Help
