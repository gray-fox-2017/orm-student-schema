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
    return queryInterface.bulkInsert('Students',[{
      firstName:'aldy',
      lastName:'andika',
      birthDate:new Date('1990-07-17'),
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      firstName:'aldy',
      lastName:'andika',
      birthDate:new Date('1990-07-17'),
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      firstName:'aldy',
      lastName:'andika',
      birthDate:new Date('1990-07-17'),
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      firstName:'aldy',
      lastName:'andika',
      birthDate:new Date('1990-07-17'),
      createdAt:new Date(),
      updatedAt:new Date()
    }],{})
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
