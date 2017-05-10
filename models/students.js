'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Students.findAll()
        .then((students)=>{
          students.forEach(function(student) {
            student.fullname = `${student.firstname} ${student.lastname}`
          })
          callback(students)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function() {
        const now = new Date();
        let birthdate = new Date(this.birthdate);
        return `${now.getFullYear() - birthdate.getFullYear()}`;
      }
    }
  });
  return Students;
};
