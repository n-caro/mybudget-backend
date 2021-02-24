_operationRepository = null;

class OperationService {
  constructor({ OperationRepository }) {
    _operationRepository = OperationRepository;
  }

  async createOperation(operation){
    return await _operationRepository.createOperation(operation);
  };

  async getAll(userID, limit, page){
    const totals = await _operationRepository.countAllOperations(userID);
    const operations = await _operationRepository.getAll(userID, limit, page)
    return {
      totals,
      operations
    }
  };
}

module.exports = OperationService;
