_operationRepository = null;
_CategoryRepository = null;
const ErrorResponse = require("../helpers/ErrorResponse");
class OperationService {
  constructor({ OperationRepository, CategoryRepository }) {
    _operationRepository = OperationRepository;
    _CategoryRepository = CategoryRepository;
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
    const query = { userId, typeId };
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
      return { message: "Operation has been successfully deleted." };
    } else {
      throw new ErrorResponse("Operation not found.", 404);
    }
  }

  async updateOperation(id, userId, updateValues) {
    const operation = await _operationRepository.getById(id, userId);
    if (!operation) {
      throw new ErrorResponse("Operation not found.", 400);
    }
    const allowedAttributes = ["amount", "dateOperation", "note", "categoryId"];
    const queryUpdate = {};
    allowedAttributes.forEach((key) => {
      if (updateValues[key]) {
        queryUpdate[key] = updateValues[key];
      }
    });
    if (queryUpdate["categoryId"]) {
      const category = await _CategoryRepository.getById(
        queryUpdate["categoryId"]
      );
      if (!category || category.typeId != operation.typeId) {
        throw new ErrorResponse("Invalid category.", 400);
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
      throw new ErrorResponse("Operation could not be updated.", 500);
    }
  }
}

module.exports = OperationService;
