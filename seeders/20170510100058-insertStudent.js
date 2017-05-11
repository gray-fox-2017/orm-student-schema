'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{ //pake plurels tau....
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [
      {
        first_name: 'Deri',
        last_name: 'kurniawan',
        gender: 'laki-laki',
        email: 'deri@gmail.com',
        height: 170,
        phone: '085719012371',
        birthdate: '1992-12-11',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        first_name: 'Nugraha',
        last_name: 'nunu',
        gender: 'laki-laki',
        email: 'nunu@gmail.com',
        height: 170,
        phone: '085716701234',
        birthdate: '1990-07-13',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {})
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
