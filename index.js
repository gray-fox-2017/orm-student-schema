"use strict"

const db = require("./models")
const repl = require('repl');
let replserver = repl.start({
  prompt: '\(\~\'v\'\)\~  ',
  input: process.stdin,
  output: process.stdout
})

let  all = () => db.Student.getAllData(function(students) {
  students.forEach( x => {
    console.log('\nNama Depan    : ' + x.first_name);
    console.log('Nama Belakang : ' + x.last_name);
    console.log('Nama Lengkap  : ' + x.full_name);
  })
})

let umur = () => db.Student.getAllData( list => {
  console.log('\n')
  list.forEach( x => {
    console.log(x.getAge());
  })
})

let add = (obj) => {db.Student.create(obj)
  .then(() => {
    console.log('berhasil!')
  })
  .catch((err) => {
    console.log(err);
  })
}


replserver.context.lihat = all;
replserver.context.lihatUmur = umur;
replserver.context.tambah = add;

 // tambah({email: 'asfg', tinggi_badan: 100})