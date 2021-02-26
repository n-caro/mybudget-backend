const { sequelize } = require("../models");
const db = require("../models");

class OperationCategoryRepository {
  
  getById(id){
    const query = {id}
    return db.OperationCategory.findOne({where: query});
  }

}

module.exports = OperationCategoryRepository;
