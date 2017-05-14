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
      first_name: 'Shabrina',
      last_name: 'Inmas',
      gender: 'female',
      birthday: '1991-01-18T00:00:00',
      email: 'shabrina@inmas.com',
      phone: '081219000000',
      height: 160,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Algebra',
      last_name: 'Altinouva',
      gender: 'male',
      birthday: '1991-06-24T00:00:00',
      email: 'algebra@meliala.com',
      phone: '081219000001',
      height: 175,
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
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
