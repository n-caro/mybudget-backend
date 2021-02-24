const { hashSync } = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compareSync(password, this.password);
        }
      },
      defaultScope: {
        attributes: { exclude: ["password"] },
      }
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Operation, { as: "Operations" });
  };

  User.beforeCreate((user, options) => {
    const hashedPassword = hashSync(user.password, 10);
    user.password = hashedPassword;
  });

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return User;
};
