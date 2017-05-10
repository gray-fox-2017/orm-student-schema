'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll()
        .then(function (students) {
          students.forEach((student) => {
            student['full_name'] = `${student.first_name} ${student.last_name}`;
          })
          callback(students)
        })
        .catch(callback)
      }

    },

    instanceMethods: {
      getFullName: function () {
        return `${this.full_name}`
      },
      getAge: function () {
        var dateNow = new Date().getFullYear();
        var dateBirth = this.birthdate.getFullYear();
        return dateNow - dateBirth
      }
    },

  });
  return Student;
};
