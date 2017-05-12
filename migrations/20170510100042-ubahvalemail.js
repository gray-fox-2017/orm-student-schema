'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return sequelize.define('Students', {
    'email': {
      type: Sequelize.STRING,
      validate: {
        isEmail : true
        // isEven: function(value) {
        //   if(parseInt(value) % 2 != 0) {
        //     throw new Error('Only even values are allowed!')
        //   // we also are in the model's context here, so this.otherField
        //   // would get the value of otherField if it existed
        //   }
        // }
      }
    }
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
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
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
