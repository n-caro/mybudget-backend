let _CategoryService = null;

class CategoryController {
  constructor({ CategoryService }) {
    _CategoryService = CategoryService;
  }

  async getAll(req, res) {
    try {
      const categories = await _CategoryService.getAll();
      return res.json({categories});
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

module.exports = CategoryController;
