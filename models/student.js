'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email must be in correct format"
        },
        isUnique: function(content, next) {
          Student.find({where: {email: content}, attributes: ['id']})
          .then((student) => {
            if(student && this.id !== student.id) {
              return next('Email already in use!')
            }
            return next();
          })
          .catch((err) => {return next(err)})
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Phone length must be 10-13"
        },
        isNumeric: {
          args: true,
          msg: "Phone not allows letter"
        },
        isAlphanumeric: {
          args: false,
          msg: "Phone not allows alphanumeric"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "Min. height is 150cm"
        }
      }
    }
  }, {
    getterMethods: {
      fullname: function() {return `${this.firstname} ${this.lastname}`}
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      getAllData: function(callback) {
        Student.findAll()
        .then (students => {
          return callback(students)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        this.fullname = `${this.firstname} ${this.lastname}`
        return this.fullname;
      },

      getAge: function() {
        let now = new Date();
        let born = this.birthdate;
        return now.getYear()-born.getYear();
      }
    }
  });
  return Student;
};