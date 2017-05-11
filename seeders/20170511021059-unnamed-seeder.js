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
      first_name: 'ambo',
      last_name: 'dalle',
      email: 'ambo@mail.org',
      height: 168,
      birthdate: '1981-09-06',
      phone : '085716162162',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      first_name: 'aydin',
      last_name: 'fath',
      email: 'aydin@mail.org',
      height: 178,
      birthdate: '2011-03-19',
      phone : '085716162162',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      first_name: 'syauqy',
      last_name: 'fahrezy',
      email: 'sauqy@mail.org',
      height: 178,
      birthdate: '2013-06-03',
      phone : '085716162162',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
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
