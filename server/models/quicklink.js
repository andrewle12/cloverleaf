export default (sequelize, DataTypes) => {
  const Quicklink = sequelize.define(
    "Quicklink",
    {
      position: { type: DataTypes.STRING, allowNull: false },
      parent: { type: DataTypes.STRING, allowNull: false },
      child: { type: DataTypes.STRING, allowNull: false },
      isActive: { type: DataTypes.BOOLEAN }
    },
    {}
  );
  Quicklink.associate = function(models) {
    Quicklink.belongsToMany(models.User, {
      foreignKey: "userID",
      allowNull: true
    });
  };
  return Quicklink;
};
