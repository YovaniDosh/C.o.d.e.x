import { describe, expect, it } from "vitest";
import { MOVEMENT_TYPES } from "../data/categories.js";
import { validateMovementData } from "./movementUtils.js";

const validMovement = {
  type: MOVEMENT_TYPES.EXPENSE,
  amount: "125.50",
  categoryId: "food",
  date: "2026-08-15",
  description: "Supermercado",
};

describe("validateMovementData", () => {
  it("acepta un movimiento válido", () => {
    expect(validateMovementData(validMovement)).toEqual({});
  });

  it("rechaza una cantidad vacía, negativa o igual a cero", () => {
    expect(validateMovementData({ ...validMovement, amount: "" }).amount)
      .toBeDefined();
    expect(validateMovementData({ ...validMovement, amount: "-10" }).amount)
      .toBeDefined();
    expect(validateMovementData({ ...validMovement, amount: "0" }).amount)
      .toBeDefined();
  });

  it("rechaza una categoría que no corresponde al tipo", () => {
    const errors = validateMovementData({
      ...validMovement,
      categoryId: "salary",
    });

    expect(errors.categoryId).toBeDefined();
  });

  it("requiere una fecha", () => {
    const errors = validateMovementData({ ...validMovement, date: "" });

    expect(errors.date).toBeDefined();
  });
});