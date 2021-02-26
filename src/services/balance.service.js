_OperationRepository = null;

class BalanceService {
  constructor({ OperationRepository }) {
    _OperationRepository = OperationRepository;
  }

  async getBalance(userId) {
    let totalIncomes = await _OperationRepository.sumAmmount({userId, OperationTypeId: 1}) || 0;
    let totalExpenses = await _OperationRepository.sumAmmount({userId, OperationTypeId: 2}) || 0;
    totalIncomes = +totalIncomes.total || 0;
    totalExpenses = +totalExpenses.total || 0;
    const currentBalance = totalIncomes - totalExpenses;
    return {totalIncomes, totalExpenses, currentBalance}
  }
}

module.exports = BalanceService;
