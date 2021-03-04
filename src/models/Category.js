module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define(
    "Category",
    {
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  Category.associate = function (models) {
    Category.belongsTo(models.Type, {
      foreignKey: "typeId",
    });
  };
  return Category;
};
