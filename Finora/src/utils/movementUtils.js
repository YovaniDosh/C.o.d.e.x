import {
  CATEGORIES,
  MOVEMENT_TYPES,
} from "../data/categories.js";

export function validateMovementData(data) {
  const errors = {};
  const amount = Number(data.amount);

  const validTypes =
    Object.values(MOVEMENT_TYPES);

  const matchingCategory = CATEGORIES.some(
    (category) =>
      category.id === data.categoryId &&
      category.type === data.type,
  );

  if (!validTypes.includes(data.type)) {
    errors.type =
      "Selecciona un tipo de movimiento válido.";
  }

  if (
    !Number.isFinite(amount) ||
    amount <= 0
  ) {
    errors.amount =
      "Introduce una cantidad mayor que cero.";
  }

  if (!matchingCategory) {
    errors.categoryId =
      "Selecciona una categoría válida.";
  }

  if (!data.date) {
    errors.date = "Selecciona una fecha.";
  }

  return errors;
}

export function createMovement(data) {
  return {
    id: crypto.randomUUID(),
    type: data.type,
    amount: Number(data.amount),
    categoryId: data.categoryId,
    date: data.date,
    description:
      data.description.trim(),
  };
}

export function updateMovement(id, data) {
  return {
    id,
    type: data.type,
    amount: Number(data.amount),
    categoryId: data.categoryId,
    date: data.date,
    description:
      data.description.trim(),
  };
}