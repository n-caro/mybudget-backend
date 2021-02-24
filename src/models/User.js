module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      Email: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Operation, { as: "Operations" });
  };

  return User;
};
