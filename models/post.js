module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
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

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: "userID",
      onDelete: "CASCADE",
      allowNull: false
    });
  };
  return Post;
};
