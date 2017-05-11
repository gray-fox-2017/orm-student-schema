'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    // email: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : true,
        isUnique : (value,next) =>{
          if(value) {
            Students
            .find({
              where : {
                email : value
              }
            }).then((err)=>{
              if(err) {
                return next('Email is Error')
              } else {
                next()
              }
            })
          }
        }
      }
    },

    height : {
      type : DataTypes.STRING,
      validate : {
        min : 150
      }
    } ,

    birthdate : DataTypes.STRING ,
    // phone : DataTypes.STRING
    phone : {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [10,13],
          msg : `Phone length must be 10-13`
        },
        isNumeric : true,
        isAlphanumeric : {
          msg : `Phone not allow alphanumeric`
        },
        isAlpha : {
          msg : `Phone not Allow Letters`
        }
      }
    }


  }, {


    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        Students.findAll()
        .then(function(data){
          data.forEach((study)=>{
            study.fullname =study.first_name+" "+study.last_name
          })
          return callback(data)
        })
      }
    },

    instanceMethods: {
      getFullName() {
        return `${this.first_name} ${this.last_name}`
      },

      getAge() {
        let now = new Date();
        let birthDate = new Date(this.birthdate);
        let age = now.getFullYear() - birthDate.getFullYear();
        return age;
      }

    } //end of instanceMethods


  });
  return Students;
};
