'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn(
      'Students',
      'email',
      {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            msg: "Not a valid email format"
          },
          isUnique: function(content, other) {
            Teacher.find({where: {email: content}})
            .then((err, teacher) => {
              if(err) return other(err);
              if(teacher && this.id !== teacher.id) return other('Email already in use!')
            })
          }
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
    */
  }
};
