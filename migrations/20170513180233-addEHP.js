'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction((t) => {
      return queryInterface.addColumn('Students','email',Sequelize.STRING,{transaction:t})
      .then (function() {
        return queryInterface.addColumn('Students','phone',Sequelize.STRING,{transaction:t})
        .then (function() {
          return queryInterface.addColumn('Students','height',Sequelize.INTEGER,{transaction:t})
        });
      });
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction((t) => {
      return queryInterface.removeColumn('Students','email',Sequelize.STRING,{transaction:t})
      .then (function() {
        return queryInterface.removeColumn('Students','phone',Sequelize.STRING,{transaction:t})
        .then (function() {
          return queryInterface.removeColumn('Students','height',Sequelize.INTEGER,{transaction:t})
        });
      });
    });
  },
};
