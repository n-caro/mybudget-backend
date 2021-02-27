_OperationRepository = null;
const {INCOME_TYPEID, EXPENSE_TYPEID} = require('../config')

class BalanceService {
  constructor({ OperationRepository }) {
    _OperationRepository = OperationRepository;
  }

  async getBalance(userId) {
    let totalIncomes = await _OperationRepository.sumAmmount({userId, typeId: INCOME_TYPEID}) || 0;
    let totalExpenses = await _OperationRepository.sumAmmount({userId, typeId: EXPENSE_TYPEID}) || 0;
    totalIncomes = +totalIncomes.total || 0;
    totalExpenses = +totalExpenses.total || 0;
    const currentBalance = +(totalIncomes - totalExpenses).toFixed(2);
    return {totalIncomes, totalExpenses, currentBalance}
  }
}

module.exports = BalanceService;
