'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next){
          var self = this;
          Student.find({where: {email: value}})
          .then(function(student) {
            if (student && self.id !== student.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          })
        },
        is:{
          args: /\w{5,30}\@\w{2,10}.\w{2,10}/i,
          msg: 'Email must contain @ and .'
        }
      },
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: {
          args: 150,
          msg: 'min height is 150 cm'
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate: {
        isAlphanumeric:{
          args: false,
          msg: 'Phone not allow alphanumeric'
        },
        len:{
          args: [10,13],
          msg: 'Phone length must be 10-13'
        },
        isNumeric:{
          args: true,
          msg: 'Phone not allow letters'
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    getterMethods: {
      fullName: function(){
        return `${this.first_name} ${this.last_name}`
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAll: function(models){
        Student.findAll()
        .then(students => {
          models(students)
        })
      }
    },
    instanceMethods: {
      getAge: function(){
        let birthYear = new Date(this.birthday).getFullYear()
        let thisYear = new Date().getFullYear()
        return thisYear - birthYear
      }
    }
  });
  return Student;
};
