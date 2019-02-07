module.exports = (sequelize, DataTypes) => {
  const Quicklink = sequelize.define("Quicklink", {
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    child: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN
    }
  });
  Quicklink.associate = models => {
    Quicklink.belongsTo(models.Message, {
      foreignKey: "messageID",
      onDelete: "CASCADE",
      allowNull: false
    });
  };
  return Quicklink;
};
