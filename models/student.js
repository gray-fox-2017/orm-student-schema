'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value,next){
          Student.find({
            where:{email:value}
          }).then(function(err){
            if(err){
              return next('email existed')
            } else {
            next()
            }
          })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        cekType:function(value){
          if(typeof value != 'string'){
            throw new Error('phone harus dalam string')
          }
        },
        cekValidasi:function(value){
          let cek=/[a-zA-Z]/g;
          if(cek.test(value)){
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number')
            } else {
              throw new Error('Phone not allow letter')
            }
          } else {
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number2')
            } else {
              if(value.length>13 || value.length<10){
                throw new Error('phone length must be 10-13')
              }
            }
          }
        }
      }
    },
    height:{
      type:DataTypes.INTEGER,
      validate:{
        min:{
          args:150,
          msg:'minimum 150'
        },
        isNumeric:true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: (callback)=>{
        Student.findAll()
        .then(callback)
      }
    },
    instanceMethods:{
      getFullName: function(){
        return `${this.firstName} ${this.lastName}`
      },
      getAge:function(){
        let now = new Date()
        let age = now.getFullYear() - this.birthDate.getFullYear()
        return age
      }
    }
  });
  return Student;
};