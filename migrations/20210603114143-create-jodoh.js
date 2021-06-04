'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jodohs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KesatriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kesatrias',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      KembangId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kembangs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jodohs');
  }
};