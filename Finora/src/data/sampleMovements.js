import { MOVEMENT_TYPES } from "./categories.js";

export const SAMPLE_MOVEMENTS = [
  {
    id: "movement-1",
    type: MOVEMENT_TYPES.INCOME,
    amount: 3200,
    categoryId: "salary",
    date: "2026-08-01",
    description: "Salario de agosto",
  },
  {
    id: "movement-2",
    type: MOVEMENT_TYPES.EXPENSE,
    amount: 950,
    categoryId: "housing",
    date: "2026-08-05",
    description: "Alquiler",
  },
  {
    id: "movement-3",
    type: MOVEMENT_TYPES.EXPENSE,
    amount: 180.5,
    categoryId: "food",
    date: "2026-08-08",
    description: "Compra del supermercado",
  },
];