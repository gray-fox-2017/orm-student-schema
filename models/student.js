'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {args: true, msg: 'Salah cuy email lu!'},
        isUnique: function(data, err) {
                  student.find({
                    where: {
                      email: data
                    }
                  }).then(function(error) {
                    if (error)
                      return err('Email address already in use!');
                    err();
                  });
                }
    }
  },
     phone: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{args:true, msg: 'Your Phone is not Numeric!'},
        len:{args:[10,13], msg: `Your Phone number must be 10-13 digits!`},
        isAlphanumeric: function (data, err) {
                             let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                             if(phoneno.test(data)) 
                               err();
                              return err('Format phone not valid');}  
      }  
    },
     height: {
       type:DataTypes.INTEGER,
       validate:{
         min: {
        args:150,
         msg: `Validation Error height`}
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
