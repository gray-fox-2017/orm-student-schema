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
        isEmail: {
          args: true,
          msg: `Validation error: Email format is incorrect.`
        },
        isUnique: function(value, next) {
          //Student.find({where: {email: value}, attributes: ['id']})
          Student.find({where: {email: value}})
            .then((student) => {
              if(student && this.id !== student.id) {
                return next('Email already in use!')
              }
              return next();
            })
            .catch((err) => {
              return next(err)
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10-13],
          msg: `Validation error: Phone length must be 10-13.`
        },
        isNumeric: {
          args: true,
          msg: `Validation error: Phone not allow letters.`
        },
        isAlphanumeric: {
          args: false,
          msg: `Validation error: Phone not allow alphanumeric.`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: `Validation error: Minimum height is 150 cm.`
        }
      }
    },

    getterMethods: {
      full_name: function() {return this.getFullName()}
    },

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll()
          .then((students) => {callback(students)});
      }
    },

    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function() {
        return `${this.first_name} is ${new Date().getYear() - new Date(this.birthday).getYear()} years old.`
      }
    }
  });
  return Student;
};
