const db = require("../models");

class CategoryRepository {
  
  getAll(){
    return db.OperationCategory.findAll();
  }

  getById(id){
    const query = {id}
    return db.OperationCategory.findOne({where: query});
  }

}

module.exports = CategoryRepository;
