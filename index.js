"use strict"

const db = require('./models')


var all = () => {db.Student.getAll(function(Students) {
    Students.forEach(function(student){
      console.log('Student ID: ',student.id)
      console.log('Fullname: ', student.fullName)
      console.log('Birthday: ', student.birthday)
      console.log('email: ', student.email)
      console.log('Tinggi badan: ', student.tinggi_badan)
      console.log('Phone: ', student.phone)
      console.log('\n')
    })
  })
}

// all()


function Add(){
  db.Student.create({
    first_name: 'Priambodo2',
    last_name: 'Kurniawan',
    gender: 'L',
    birthday: new Date('1992-11-28'),
    email: 'priambodogmailcom',
    tinggi_badan: 140,
    phone: '099-493s8',
  })
  .then(students => {
    console.log('berhasil ditambahkan');
  })
  .catch(err => console.log(err.message));
}

Add()
