'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student',
  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          msg: "Email tidak sesuai format"
        },
        isUnique: function (value,next){
          if(value){
            Student
            .find({ where: {email:value }})
            .then(function (student) {
              if (student) next ("Email sudah ada");
              else next();
            }).error(function (err) {
              next(err.message);
            });
          }

        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /\d{10,13}/i,
          msg: "Phone harus berupa angka"
        },
      }
    },
    birthdate: DataTypes.DATE,
    tinggi:{
      type: DataTypes.INTEGER,
      validate:{
        min : {args:150,msg:'Tinggi minimum 150cm'}
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }
  , {
    getterMethods : {
      full_name : function() { return this.getFullName()},
      age: function(){return this.getAge();}
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll().then( (students) => {
          callback(students);
        });
      },
      insertStudent: function(student) {
        Student.create(student).then(function(student) {
          console.log(student.getFullName());
        }).catch(err => {
          console.log(err.message);
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function ()  {
        let currYear = new Date().getFullYear();
        let birthYear= new Date(`${this.birthdate}`).getFullYear() ;
        return (parseInt(currYear) - parseInt(birthYear))
      }
    }
  });
  return Student;
};