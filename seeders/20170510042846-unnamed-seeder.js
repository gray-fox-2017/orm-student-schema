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
      first_name: 'Sidik',
      last_name: 'Sigap',
      birthdate: new Date('1993-11-29'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gilang',
      last_name: 'Gesit',
      birthdate: new Date('1993-5-13'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chika',
      last_name: 'Cepat',
      birthdate: new Date('1993-12-24'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lintang',
      last_name: 'Lincah',
      birthdate: new Date('1994-1-1'),
      createdAt: new Date(),
      updatedAt: new Date()
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
