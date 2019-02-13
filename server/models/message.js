module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      title: { type: DataTypes.TEXT, allowNull: false },
      body: { type: DataTypes.TEXT, allowNull: false },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isURL: true }
      }
    },
    {}
  );
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: "userID",
      onDelete: "CASCADE",
      allowNull: false
    });
  };
  return Message;
};
