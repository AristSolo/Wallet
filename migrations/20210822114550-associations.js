'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Businesses","user_id",{
      type: Sequelize.INTEGER,
      references:{
          model: 'Users',
          key: 'id'
      },
      onDelete: 'SET NULL'
  });
  //
  await queryInterface.changeColumn("Wallets","user_id",{
    type: Sequelize.INTEGER,
    references:{
        model: 'Users',
        key: 'id'
    },
    onDelete: 'SET NULL'
  });
  //
  await queryInterface.changeColumn("Wallets","business_id",{
    type: Sequelize.INTEGER,
    references:{
        model: 'Businesses',
        key: 'id'
    },
    onDelete: 'SET NULL'
  });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
