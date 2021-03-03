let _operationService = null;

class OperationController {
  constructor({ OperationService }) {
    _operationService = OperationService;
  }

  async createOperation(req, res) {
    const { body } = req;
    try {
      const operation = {
        amount: parseFloat(body.amount),
        dateOperation: body.dateOperation,
        note: body.note,
        categoryId: parseInt(body.categoryId),
        typeId: parseInt(body.typeId),
        userId: req.user.id,
      };
      const operationSaved = await _operationService.createOperation(operation);
      return res.status(201).json(operationSaved);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }

  async getAll(req, res) {
    const { limit, page } = req.query;
    const userID = req.user.id;
    try {
      const operations = await _operationService.getAll(userID, limit, page);
      return res.json(operations);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }

  async getAllByOperationType(req, res) {
    const { limit, page } = req.query;
    const { typeId } = req.params;
    const userId = req.user.id;
    try {
      const operations = await _operationService.getAllByOperationType(
        typeId,
        userId,
        limit,
        page
      );
      return res.json(operations);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    const userId = req.user.id; 
    try {
      const operation = await _operationService.getById(id, userId);
      return res.json(operation);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }

  async deleteOperation(req, res) {
    const { id } = req.params;
    const userId = req.user.id; 
    try {
      const operation = await _operationService.deleteOperation(id, userId);
      return res.json(operation);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }
  async updateOperation(req, res) {
    const { id } = req.params;
    const userId = req.user.id;
    const { body } = req;
    try {
      const operation = await _operationService.updateOperation(id, userId, body);
      return res.json(operation);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Interval server error.";
      return res.status(status).json({
        status,
        message,
      });
    }
  }
}

module.exports = OperationController;
