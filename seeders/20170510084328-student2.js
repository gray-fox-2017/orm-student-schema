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
      first_name: 'Poppy',
      last_name : 'Sari',
      birthdate:new Date('1993-11-07'),
      phone:'085813372797',
      email:'lalalagmail.com',
      tinggi:0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Lycaa',
      last_name : 'Tjan',
      birthdate:new Date('2000-03-30'),
      phone:'085813372791',
      email:'yeyye@gmail.com',
      tinggi:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Miko',
      last_name : 'Tjan',
      birthdate:new Date('2000-11-07'),
      phone:'085813372792',
      tinggi:225,
      email:'miko@gmail.com',
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
