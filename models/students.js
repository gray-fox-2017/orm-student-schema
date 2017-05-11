'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email:{
      type : DataTypes.STRING,
      validate :{
        isEmail : {
          args : true,
          msg : "Must email format"
        },
        isUnique : {
          function(value, next) {
            if(value){
              Students.findOne({ where: { email: value }})
              .then(function(Student) {
                if(Student){
                  next("Email already taken");
                } else {
                  next()
                }
              })
              .catch(function(err) {
                next(err.message)
              })
            }
          }
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate :{
        isNumeric : {
          args : true,
          msg : `Phone not allow alphanumeric \n Phone npt allow letter`
        },
        len :{
          args : [10,13],
          msg : `Only allow 10 - 13 character`
        }
      }
    },
    height: {
      type : DataTypes.INTEGER,
      validate :{
        min : {
          args : 150,
          msg : "Minimum height is 150 cm"
        }
      }
    }
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
