_operationRepository = null;
_OperationCategoryRepository = null;
class OperationService {
  constructor({ OperationRepository, OperationCategoryRepository }) {
    _operationRepository = OperationRepository;
    _OperationCategoryRepository = OperationCategoryRepository;
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

  async getById(id, userId) {
    const operation = await _operationRepository.getById(id, userId);
    return { operation };
  }

  async deleteOperation(id, userId) {
    const operation = await _operationRepository.deleteById(id, userId);
    if (operation == 1) {
      return { message: "Operation has deleted sucefuly." };
    } else {
      let error = new Error("operation not found.");
      error.status = 404;
      throw error;
    }
  }

  async updateOperation(id, userId, updateValues) {
    const operation = await _operationRepository.getById(id, userId);
    if (!operation) {
      throw new Error("operation not found.");
    }
    const allowedAttributes = [
      "amount",
      "dateOperation",
      "note",
      "operationCategoryId",
    ];
    const queryUpdate = {};
    allowedAttributes.forEach((key) => {
      if (updateValues[key]) {
        queryUpdate[key] = updateValues[key];
      }
    });
    if(queryUpdate["operationCategoryId"]){
      console.log("HAY CATEGORIA")
      const category = await _OperationCategoryRepository.getById(queryUpdate["operationCategoryId"]);
      if(!category || category.operationTypeId != operation.operationTypeId){
        throw new Error("Category is not valid.");
      }
    }
    const operationUpdate = await _operationRepository.update(
      id,
      userId,
      queryUpdate
    );
    if (operationUpdate == 1) {
      return await _operationRepository.getById(id, userId);
    } else {
      throw new Error("The operation could not be updated.");
    }
  }
}

module.exports = OperationService;
