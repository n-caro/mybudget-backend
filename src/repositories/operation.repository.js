const db = require("../models");

class OperationRepository {
  createOperation(operation) {
    return db.Operation.create(operation);
  }

  getAll(query, limit = 10, page = 1) {
    limit = parseInt(limit);
    const skips = limit * (page - 1);
    return db.Operation.findAll({
      where: query,
      attributes: ["id", "amount", "dateOperation", "note", "updatedAt"],
      limit: limit,
      offset: skips,
      order: [["dateOperation", "DESC"]],
      include: [
        { model: db.Type, attributes: ["id", "type"]},
        { model: db.Category, attributes: ["id", "name"] },
      ],
    });
  }

  countOperations(query){
    return db.Operation.count({
      where: query
    })
  }

  sumAmmount(query){
    return db.Operation.findAll({
      where: query,
      attributes: [
        [db.sequelize.fn('sum', db.sequelize.col('Operation.amount')), 'total']
      ],
      plain: true,
      raw : true
    })
  }

  getById(id, userId){
    const query = {id, userId}
    return db.Operation.findOne({where: query});
  }

  deleteById(id, userId){
    const query = {id, userId}
    return db.Operation.destroy({where: query});
  }

  update(id, userId, queryUpdate){
    const queryWhere = {id, userId}
    return db.Operation.update(queryUpdate, {where: queryWhere})
  }


}

module.exports = OperationRepository;
