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
    let arr=[{
      first_name: 'John',
      last_name: 'Doe',
      birthdate: new Date('1993-05-12'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'James',
      last_name: 'Sraun',
      birthdate: new Date('1993-11-10'),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

    return queryInterface.bulkInsert('Students',arr,{});

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
