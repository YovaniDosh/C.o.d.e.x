import { MOVEMENT_TYPES } from "../data/categories.js";

function isValidMovement(movement) {
  return (
    movement &&
    Number.isFinite(movement.amount) &&
    movement.amount >= 0 &&
    Object.values(MOVEMENT_TYPES).includes(movement.type)
  );
}

export function calculateTotalByType(movements, type) {
  if (!Array.isArray(movements)) {
    return 0;
  }

  return movements
    .filter(
      (movement) =>
        isValidMovement(movement) && movement.type === type,
    )
    .reduce((total, movement) => total + movement.amount, 0);
}

export function calculateFinancialSummary(movements) {
  const totalIncome = calculateTotalByType(
    movements,
    MOVEMENT_TYPES.INCOME,
  );
  const totalExpenses = calculateTotalByType(
    movements,
    MOVEMENT_TYPES.EXPENSE,
  );
  const balance = totalIncome - totalExpenses;
  const savingsPercentage =
    totalIncome > 0 ? (balance / totalIncome) * 100 : 0;

  return {
    totalIncome,
    totalExpenses,
    balance,
    savingsPercentage,
  };
}