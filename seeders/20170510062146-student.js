'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('students', [{
      first_name  : 'Kamijo',
      last_name   : 'Sutana',
      gender      : 'l',
      birthday    : new Date('1995-02-23'),
      email       : 'kamijos@gmail.com',
      phone       : 082323232323,
      height      : 100,
      createdAt   : new Date(),
      updatedAt   : new Date()

    },{
      first_name  : 'iini',
      last_name   : 'hharusnya gabisa',
      gender      : 'l',
      birthday    : new Date('1995-02-23'),
      email       : 'aded@gmail.com',
      height      : 150,
      phone       : 082277732323,
      createdAt   : new Date(),
      updatedAt   : new Date()
    },{
      first_name  : 'gabisa',
      last_name   : 'masuk',
      gender      : 'l',
      birthday    : new Date('1995-09-13'),
      email       : 'sudilis@gmail.com',
      phone       : 99090909,
      height      : 128,
      createdAt   : new Date(),
      updatedAt   : new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
