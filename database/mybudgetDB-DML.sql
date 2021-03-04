-- Remember that you must run the DML script before
-- Create types (income: 1 and expense: 2)
INSERT INTO Types (id, type) 
VALUES 
  (1, 'income'), 
  (2, 'expense');
-- Add categories for type: income
INSERT INTO Categories(id, name, typeId) 
VALUES 
  (1, 'Salary', 1), 
  (2, 'Selling', 1), 
  (3, 'Award', 1), 
  (4, 'Investments', 1), 
  (5, 'Gifts', 1), 
  (6, 'Loan', 1), 
  (7, 'Others', 1),
  (8, 'Payments', 2), 
  (9, 'Fees and charges', 2), 
  (10, 'Shopping', 2), 
  (11, 'Food', 2), 
  (12, 'Health', 2), 
  (13, 'Transportation', 2), 
  (14, 'Entertrainment', 2), 
  (15, 'Education', 2), 
  (16, 'Gifts', 2), 
  (17, 'Others', 2);
