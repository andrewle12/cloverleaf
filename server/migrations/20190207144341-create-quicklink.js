module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("Quicklinks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      parent: {
        type: Sequelize.STRING
      },
      child: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
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
  }
};
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("Quicklinks");
}
