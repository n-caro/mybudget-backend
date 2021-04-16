const db = require("../models");
const { Op } = require("sequelize");

class OperationRepository {
  createOperation(operation) {
    return db.Operation.create(operation);
  }

  getAll(userId, limit = 10, page = 1, startDate, endDate) {
    let queryWhere = {
      userId
    }
    limit = parseInt(limit);
    const skips = limit * (page - 1);
    if(startDate && endDate) {
      queryWhere.dateOperation = {
        [Op.between] : [startDate, endDate]
      }
    }
    return db.Operation.findAll({
      where: queryWhere,
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

  countOperations(userId, startDate, endDate){
    let query = {
      userId
    }
    if(startDate && endDate) {
      query.dateOperation = {
        [Op.between] : [startDate, endDate]
      }
    }
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
