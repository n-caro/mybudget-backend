_operationRepository = null;
class OperationService {
  constructor({ OperationRepository }) {
    _operationRepository = OperationRepository;
  }

  async createOperation(operation) {
    return await _operationRepository.createOperation(operation);
  }

  async getAll(userId, limit, page) {
    const query = { userId };
    const totals = await _operationRepository.countOperations(query);
    const operations = await _operationRepository.getAll(query, limit, page);
    return {
      totals,
      operations,
    };
  }

  async getAllByOperationType(typeId, userId, limit, page) {
    const query = { userId, operationTypeId: typeId };
    const totals = await _operationRepository.countOperations(query);
    const operations = await _operationRepository.getAll(query, limit, page);
    return {
      totals,
      operations,
    };
  }

  async getById(id, userId){
    const operation = await _operationRepository.getById(id, userId);
    return {operation};
  }

  async deleteOperation(id, userId){
    const operation = await _operationRepository.deleteById(id, userId);
    if(operation == 1){
      return {message: "Operation has deleted sucefuly."}
    } else{
      let error = new Error("operation not found.");
      error.status = 404
      throw error;
    }
  }
}

module.exports = OperationService;
