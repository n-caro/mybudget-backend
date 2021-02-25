const { query } = require("express");
const { sequelize } = require("../models");
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
        { model: db.OperationType, attributes: ["id", "type"]},
        { model: db.OperationCategory, attributes: ["id", "name"] },
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
        [sequelize.fn('sum', sequelize.col('Operation.amount')), 'total']
      ]
    })
  }

  getById(id, userId){
    const query = {id, userId}
    return db.Operation.findOne({where: query});
  }


}

module.exports = OperationRepository;
