'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isInt:{
        msg: 'Must be a number!'
        },
        isLess: function(value){
          if(value <151)
          {
            throw new Error('your height must be more then 150');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Already have an account with this email address.',
        fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
          isLess: function(value){
            if(value.length <10){
              throw new Error('Must be 10-13');
            }
          },
          isMore: function(value){
            if(value.length >13){
              throw new Error('Must be 10-13');
            }
          },
          isAlphanumeric: function(value){
            if((/[a-z||A-Z]+/g).test(value))
            {
              throw new Error('Phone not allow letters.');
            }
              else if((/\D+/g).test(value))
              {
                throw new Error('Phone not allow alphanumeric.');
              }
          }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
        Student.findAll()
        .then (rows => {return callback(rows);});
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function(){
        let today = new Date();
        let age = today.getFullYear()-this.birthdate.getFullYear();
        return age;
      }

    }
  });
  return Student;
};
