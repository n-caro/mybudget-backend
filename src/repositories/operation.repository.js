const db = require("../models");

class OperationRepository {
  
  createOperation(operation){
    return db.Operation.create(operation);
  }
}

module.exports = OperationRepository;
