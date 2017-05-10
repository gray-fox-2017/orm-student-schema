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
      first_name: 'Priambodo',
      last_name: 'Kurniawan',
      gender: 'L',
      birthday: new Date('1992-11-27'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Angga',
      last_name: 'Darmawan',
      gender: 'L',
      birthday: new Date('1992-01-24'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Andrew',
      last_name: 'Snewe',
      gender: 'L',
      birthday: new Date('1990-12-20'),
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
    return queryInterface.bulkDelete('Students', null, {});
  }
};
