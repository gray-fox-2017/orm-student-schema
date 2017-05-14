'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('Students', 'email',{type: Sequelize.STRING, allowNull: true}),
      queryInterface.addColumn('Students', 'tinggi_badan',{type: Sequelize.INTEGER, allowNull: true}),
      queryInterface.addColumn('Students', 'phone',{type: Sequelize.STRING, allowNull: true})
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.dropTable('Students', 'email'),
      queryInterface.dropTable('Students', 'tinggi_badan'),
      queryInterface.dropTable('Students', 'phone')
    ]
  }
};