const db = require("../models");

class CategoryRepository {
  
  getAll(){
    return db.Category.findAll({attributes:["id", "name", ], include: {model: db.Type, attributes: ["id", "type"]}});
  }

  getById(id){
    const query = {id}
    return db.Category.findOne({where: query});
  }

}

module.exports = CategoryRepository;
