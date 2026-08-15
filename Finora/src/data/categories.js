export const MOVEMENT_TYPES = {
  INCOME: "income",
  EXPENSE: "expense",
};

export const CATEGORIES = [
  {
    id: "salary",
    name: "Salario",
    type: MOVEMENT_TYPES.INCOME,
  },
  {
    id: "sales",
    name: "Ventas",
    type: MOVEMENT_TYPES.INCOME,
  },
  {
    id: "other-income",
    name: "Otros ingresos",
    type: MOVEMENT_TYPES.INCOME,
  },
  {
    id: "housing",
    name: "Vivienda",
    type: MOVEMENT_TYPES.EXPENSE,
  },
  {
    id: "food",
    name: "Alimentación",
    type: MOVEMENT_TYPES.EXPENSE,
  },
  {
    id: "transport",
    name: "Transporte",
    type: MOVEMENT_TYPES.EXPENSE,
  },
  {
    id: "health",
    name: "Salud",
    type: MOVEMENT_TYPES.EXPENSE,
  },
  {
    id: "leisure",
    name: "Ocio",
    type: MOVEMENT_TYPES.EXPENSE,
  },
  {
    id: "other-expense",
    name: "Otros gastos",
    type: MOVEMENT_TYPES.EXPENSE,
  },
];