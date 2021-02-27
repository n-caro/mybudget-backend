const db = require("../models");

class CategoryRepository {
  
  getAll(){
    return db.Category.findAll();
  }

  getById(id){
    const query = {id}
    return db.Category.findOne({where: query});
  }

}

module.exports = CategoryRepository;
