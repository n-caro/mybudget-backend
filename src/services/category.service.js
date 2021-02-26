_CategoryRepository = null;

class CategoryService {
  constructor({ CategoryRepository }) {
    _CategoryRepository = CategoryRepository;
  }

  async getAll() {
    return await _CategoryRepository.getAll();
  }
}

module.exports = CategoryService;
