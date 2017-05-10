'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {//DataTypes.STRING,//{
      type : DataTypes.STRING,
      validate :  {
        isEmail: true
      }
    }
    phone: DataTypes.STRING,
    height: DataTypes.STRING
  }, {
    classMethods: { //static
      //untuk memodifikasi yang udah ada
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        students.findAll()
        .then(function(data) {
          data.forEach((value) => {
            value.full_name = `${value.first_name} ${value.last_name}`
          })
          return callback(data)
        })
      }
    },
    //function
    instanceMethods: { //
      //untuk yang ga ada
       getFullname: function() {
         return `Full Name : ${this.first_name} ${this.last_name}`
       },
       getAge: function() {
         let result = new Date().getFullYear() - this.birthday.getFullYear()
         return `Umur : ${result}`
       }
    }
  });
  return students;
};