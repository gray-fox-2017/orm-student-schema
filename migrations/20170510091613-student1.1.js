'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Students',
      'tinggi',
      {
        type: Sequelize.INTEGER,
        validate:{
          min : 150
        }
      });

    return queryInterface.changeColumn(
      'Students',
      'email',
      {
        type: Sequelize.STRING,
        validate:{
          isEmail : true
        },
        unique: true
      }
    );



    // return queryInterface.createTable('Students', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   first_name: {
    //     type: Sequelize.STRING
    //   },
    //   last_name: {
    //     type: Sequelize.STRING
    //   },
    //   email: {
    //     type: Sequelize.STRING,
    //     validate:{
    //       isEmail : true
    //     },
    //     unique: true
    //   },
    //   tinggi: {
    //     type: Sequelize.INTEGER,
    //     validate:{
    //       min : 150
    //     }
    //   },
    //   phone: {
    //     type: Sequelize.STRING
    //   },
    //   birthdate: {
    //     type: Sequelize.DATE
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Students');
  }
};