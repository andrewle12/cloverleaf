module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  Message.associate = models => {
    Message.hasOne(models.Quicklink, {
      foreignKey: "messageID",
      allowNull: false,
      onDelete: "CASCADE"
    });
    Message.belongsTo(models.User, {
      foreignKey: "userID",
      allowNull: false,
      onDelete: "CASCADE"
    });
  };
  return Message;
};
