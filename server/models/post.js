export default (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { len: [1] }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { len: [1] }
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { isURL: true }
      }
    },
    {}
  );
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: "userID",
      onDelete: "CASCADE",
      allowNull: false
    });
  };
  return Post;
};
