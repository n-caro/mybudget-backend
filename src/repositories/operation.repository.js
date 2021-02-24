const { sequelize } = require("../models");
const db = require("../models");

class OperationRepository {
  createOperation(operation) {
    return db.Operation.create(operation);
  }

  getAll(userId, limit = 10, page = 1) {
    limit = parseInt(limit);
    const skips = limit * (page - 1);
    return db.Operation.findAll({
      where: { userId },
      attributes: ["id", "amount", "dateOperation", "note", "updatedAt"],
      limit: limit,
      offset: skips,
      order: [["dateOperation", "DESC"]],
      include: [
        { model: db.OperationType },
        { model: db.OperationCategory, attributes: ["name"] },
      ],
    });
  }

  countAllOperations(userId){
    return db.Operation.count({
      where: {userId}
    })
  }
}

module.exports = OperationRepository;
