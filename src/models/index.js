const {DB_CONNECTIONURI} = require('../config')
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

const filebasename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(DB_CONNECTIONURI, {
  query: {},
  logging: false,
});

// Asociate Models
fs.readdirSync(__dirname)
  .filter((file) => {
    const returnFile =
      file.indexOf(".") !== 0 &&
      file !== filebasename &&
      file.slice(-3) === ".js";
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
