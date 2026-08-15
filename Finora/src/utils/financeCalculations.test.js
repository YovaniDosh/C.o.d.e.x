import { describe, expect, it } from "vitest";
import { MOVEMENT_TYPES } from "../data/categories.js";
import {
  calculateFinancialSummary,
  calculateTotalByType,
} from "./financeCalculations.js";

const movements = [
  { type: MOVEMENT_TYPES.INCOME, amount: 2000 },
  { type: MOVEMENT_TYPES.INCOME, amount: 500 },
  { type: MOVEMENT_TYPES.EXPENSE, amount: 750 },
];

describe("calculateTotalByType", () => {
  it("suma Ãºnicamente los movimientos del tipo indicado", () => {
    expect(
      calculateTotalByType(movements, MOVEMENT_TYPES.INCOME),
    ).toBe(2500);
    expect(
      calculateTotalByType(movements, MOVEMENT_TYPES.EXPENSE),
    ).toBe(750);
  });

  it("ignora cantidades negativas o invÃ¡lidas", () => {
    const invalidMovements = [
      { type: MOVEMENT_TYPES.INCOME, amount: -100 },
      { type: MOVEMENT_TYPES.INCOME, amount: "500" },
      { type: MOVEMENT_TYPES.INCOME, amount: 300 },
    ];

    expect(
      calculateTotalByType(invalidMovements, MOVEMENT_TYPES.INCOME),
    ).toBe(300);
  });

  it("devuelve cero cuando no recibe un arreglo", () => {
    expect(calculateTotalByType(null, MOVEMENT_TYPES.INCOME)).toBe(0);
  });
});

describe("calculateFinancialSummary", () => {
  it("calcula ingresos, gastos, saldo y porcentaje de ahorro", () => {
    expect(calculateFinancialSummary(movements)).toEqual({
      totalIncome: 2500,
      totalExpenses: 750,
      balance: 1750,
      savingsPercentage: 70,
    });
  });

  it("evita dividir entre cero cuando no existen ingresos", () => {
    const summary = calculateFinancialSummary([
      { type: MOVEMENT_TYPES.EXPENSE, amount: 100 },
    ]);

    expect(summary.savingsPercentage).toBe(0);
    expect(summary.balance).toBe(-100);
  });
});