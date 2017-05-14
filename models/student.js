'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     uniqe: true,
     validate: {
       isEmail: true,
       isUnique: function(value, next){
         Student.find({
           where: {
             email: value
           }
         }).then((err)=> {
           if(err)
             return next(`Email is already in use!`);
           next();
         })
       }
     }
   },
   height: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       min: 50
     }
   },
   phone: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isAlphanumeric: function (value, next) {
         let numPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
         if(numPhone.test(value))
           next();
         return next('Format phone not valid');
       }
     }
   }
 }, {
   classMethods: {
     associate: function(models) {
       // associations can be defined here
     },
     getAllData: function (callback) {
       let fullName = []
       Student.findAll() //'Student dari var sequelize'
       .then((rows) => {
         rows.forEach((row) => {
           let obj = {};
           obj['id'] = row.id
           obj['first_name'] = row.first_name
           obj['last_name'] = row.last_name
           obj['full_name'] = row.getFullName();
           fullName.push(obj)
         })
         callback(fullName)
       })
     },
     getAllAge: function(callback) {
       let ages = [];
       Student.findAll()
       .then((rows)=> {
         rows.forEach((row)=> {
           let obj = {};
           obj['id'] = row.id;
           obj['full_name'] = row.getFullName();
           obj['birth_date'] = row.birth_date;
           obj['age'] = row.getAge()
           ages.push(obj)
         })
         callback(ages)
       })
     }
   },
   instanceMethods: {
     getFullName: function() {
       return `${this.first_name} ${this.last_name}`
     },
     getAge: function() {
       let today = new Date();
       let birth_date = new Date(this.birth_date);
       let age = today.getFullYear() - birth_date.getFullYear();
       let m = today.getMonth() - birth_date.getMonth();
       if(m < 0 || (m === 0 && today.getDate() < birth_date.getDate())) {
         age-=1;
       }
       return age;
     }
   }
 });
 return Student;
};
