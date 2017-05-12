'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Students',
      'email',
      {
        type: Sequelize.STRING,
        validate: {
          isEmail : true
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */    return queryInterface.dropTable('Students');

  }
};
