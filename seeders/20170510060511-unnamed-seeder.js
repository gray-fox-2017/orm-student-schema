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
      first_name: 'John',
      last_name: 'Man',
      gender: 'male',
      height: 167,
      birthdate: new Date('1995-11-01'),
      email: 'fajar@gmail.com',
      phone: '089-8989',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      first_name: 'Somad',
      last_name: 'Man',
      gender: 'male',
      height: 176,
      birthdate: new Date('1998-12-01'),
      email: 'somad@gmail.com',
      phone: '089-9999',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      first_name: 'Rojali',
      last_name: 'Cuk',
      gender: 'male',
      height: 160,
      birthdate: new Date('1985-11-01'),
      email: 'cuk@gmail.com',
      phone: '089-7777',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      first_name: 'Raisa',
      last_name: 'sis',
      gender: 'female',
      height: 169,
      birthdate: new Date('1995-01-01'),
      email: 'sis_raisa@gmail.com',
      phone: '089-9999',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('students', null, {});
  }
};
