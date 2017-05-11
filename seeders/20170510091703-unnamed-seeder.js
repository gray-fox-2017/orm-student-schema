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
    return queryInterface.bulkInsert('Students', [{
      first_name: 'ade',
      last_name: 'anugerah',
      gender: 'pria',
      birtdate: new Date('1989-04-17'),
      email: 'ade@yahoo.com',
      phone: '082123155617',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'dedi',
      last_name: 'ismail',
      gender: 'pria',
      birtdate: new Date('1989-04-17'),
      email: 'dedi@yahoo.com',
      phone: '082123155617',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'asep',
      last_name: 'darwin',
      gender: 'pria',
      birtdate: new Date('1989-04-17'),
      email: 'asep@yahoo.com',
      phone: '082123155617',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
