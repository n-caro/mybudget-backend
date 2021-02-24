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
        operationCategoryId: parseInt(body.operationCategoryId),
        operationTypeId: parseInt(body.operationTypeId),
        userId: req.user.id
      }
      const operationSaved = await _operationService.createOperation(operation);
      return res.status(201).json(operationSaved);
    } catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Internal server error";
      return res.status(status).json({
        status,
        message,
      });
    }
  }

  async getAll(req, res) {
    const {limit, page} = req.query;
    const userID = req.user.id;
    try{
      const operations = await _operationService.getAll(userID, limit, page);
      return res.json(operations)
    }catch (error) {
      //TODO: Handle exceptions with middleware
      const status = error.status || 500;
      const message = error.message || "Internal server error";
      return res.status(status).json({
        status,
        message,
      });
    }
  }
}

module.exports = OperationController;
