'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email:// DataTypes.STRING,
    {
      type : DataTypes.STRING,
      validate :  {
        isEmail: {args : true, msg : 'email ga valid!!' }
        //isUnique: true
         //isUnique : true,
        // msg : 'error'
      }
    },
    phone :{
      type : DataTypes.INTEGER,
      validate : {
        isNumeric : {args: true, msg:'harus angka'},
        len : {args :[10,13], msg :'panjangnya harus 10-13! '},
        isAlphaNumeric : {args:false, msg:'gaboleh huruf!'}
      }
    },
    height : {
      type : DataTypes.INTEGER,
      validate : {
        min : {args: 150, msg : 'tinggi harus 150 keatas'}
      }
    }
    //height : DataTypes.INTEGER
    // },
    // phone: {
    //   type : DataTypes.INTEGER,
    //   validate : {
    //     len :{args:[10-13]},
    //     isAlpha :{args: true, msg : 'error'},
    //   }
    // },
    // height: {
    //   type : DataTypes.INTEGER,
    //   validate : {
    //     min : {args: 150, msg : 'error'},
    //   }
    // }
  }, {
    classMethods: { //static
      //untuk memodifikasi yang udah ada
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        students.findAll()
        .then(function(data) {
          data.forEach((value) => {
            value.full_name = `${value.first_name} ${value.last_name}`
          })
          return callback(data)
        })
      }
    },
    //function
    instanceMethods: { //
      //untuk yang ga ada
       getFullname: function() {
         return `Full Name : ${this.first_name} ${this.last_name}`
       },
       getAge: function() {
         let result = new Date().getFullYear() - this.birthday.getFullYear()
         return `Umur : ${result}`
       }
    }
  });
  return students;
};