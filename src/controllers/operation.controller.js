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
        note: body.note,
        operationCategoryID: parseInt(body.operationCategoryID),
        operationTypeID: parseInt(body.operationTypeID),
        userID: req.user.id
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
}

module.exports = OperationController;
