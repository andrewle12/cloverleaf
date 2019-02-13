module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      userName: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      isActive: { type: DataTypes.BOOLEAN }
    },
    {}
  );
  // User.associate = function(models) {
  //   User.hasMany(models.message, {
  //     foreignKey: "messageID",
  //     onDelete: "CASCADE",
  //     allowNull: false
  //   });
  //   User.hasMany(models.post, {
  //     foreignKey: "postID",
  //     onDelete: "CASCADE",
  //     allowNull: false
  //   });
  //   User.hasMany(models.quicklink, {
  //     foreignKey: "messageID",
  //     allowNull: false
  //   });
  // };
  return User;
};
