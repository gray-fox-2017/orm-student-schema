'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert(`students`,[{
      firstname: 'Stedy',
      lastname: 'Yulius',
      gender: 'Male',
      birthday: new Date('1991-07-14'),
      email: 'stedyyulius@gmail.com',
      phone: 087878559222,
      height: 172,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    },{
      firstname: 'Recca',
      lastname: 'Lie',
      gender: 'Male',
      birthday: new Date('1991-08-03'),
      email: 'Recca_Lie@gmail.com',
      phone: 08851234574,
      height: 170,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    },
    {
      firstname: 'Illegal',
      lastname: 'Suparjo',
      gender: 'Male',
      birthday: new Date('1945-08-03'),
      email: 'Recca_Liegmail.com',
      phone: 088534574,
      height: 120,
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    }],{})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
        
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
