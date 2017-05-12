'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'Students',
      'tinggi',
      {
        type: Sequelize.INTEGER,
        validate:{min : 150}
      });

    return queryInterface.changeColumn(
      'Students',
      'email',
      {
        type: Sequelize.STRING,
        validate:{isEmail : true},
        unique: true
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Students');

  }
};
