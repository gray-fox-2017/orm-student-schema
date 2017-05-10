'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      // validate:{
      // isEmail: true
      // isunique: (value,next)=>{
      //   student.find({
      //     where:{
      //       email:value
      //       }
      //     })
      //   }
      // }
    },
     phone: DataTypes.STRING,
     height: {
       type:DataTypes.INTEGER,
       validate:{
         min: 150
       }
   }
 }, {
    classMethods: {
      associate: function(models) {
      },
       getAllData(callback){
         student.findAll()
         .then(function(data){
           data.forEach((stud)=>{
             stud.full_name = stud.firstname + " " + stud.lastname 
           })
           return callback(data)
         })
      }
    },
    instanceMethods:{
      getFullName(){
        return `${this.firstname} ${this.lastname}`
      },
      getAge(){
        let now = new Date()
        let age = now.getFullYear() - this.birthday.getFullYear()
        return age
      }
    }
  });
  return student;
};
