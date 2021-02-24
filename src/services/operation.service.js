_operationRepository = null;

class OperationService {
  constructor({ OperationRepository }) {
    _operationRepository = OperationRepository;
  }

  async createOperation(operation){
    return await _operationRepository.createOperation(operation);
  };
}

module.exports = OperationService;
