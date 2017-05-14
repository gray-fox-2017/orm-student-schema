'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'email yg betul'
        },
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: 149
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        
      }
    }

  }, {
    getterMethods: {
      full_name: function() {
        return `${this.first_name} ${this.last_name}`
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        //return callback(findAll())
        Student.findAll().then(students => callback(students));
      }
    },

    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
        let date = new Date();
        let year = date.getYear() + 1900;

        let birthday = new Date(this.birthdate);
        let tahunBirthday = birthday.getYear() + 1900;

        let age = year - tahunBirthday;
        return `${this.first_name}: ${age}`
      }
    }
  });
  return Student;
};