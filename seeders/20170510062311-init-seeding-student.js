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
      firstname: 'John',
      lastname: 'Doe',
      birthdate: new Date ('1995-10-23'),
      email : 'johndoe@gmail.com',
      phone: '08215678908',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Agus',
      lastname: 'Mulyadi',
      birthdate: new Date('1993-04-06'),
      email : 'agusmul@gmail.com',
      phone: '08314568123',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Widodo',
      lastname: 'Gesit',
      birthdate: new Date('1992-09-10'),
      email : 'widges@gmail.com',
      phone: '08215677865',
      createdAt : new Date(),
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
    return queryInterface.bulkDelete('Students', [{
      firstname: 'John',
      lastname: 'Doe',
      birthdate: new Date('1995-10-23'),
      email : 'johndoe@gmail.com',
      phone: '08215678908'
    },{
      firstname: 'Agus',
      lastname: 'Mulyadi',
      birthdate: new Date('1993-04-06'),
      email : 'agusmul@gmail.com',
      phone: '08314568123'
    },{
      firstname: 'Widodo',
      lastname: 'Gesit',
      birthdate: new Date('1992-09-10'),
      email : 'widges@gmail.com',
      phone: '08215677865'
    }], {});
  }
};
