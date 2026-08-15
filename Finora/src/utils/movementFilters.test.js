import {
  describe,
  expect,
  it,
} from "vitest";

import {
  MOVEMENT_TYPES,
} from "../data/categories.js";

import {
  INITIAL_FILTERS,
  SORT_OPTIONS,
  filterMovements,
  getVisibleMovements,
  sortMovements,
} from "./movementFilters.js";

const movements = [
  {
    id: "1",
    type: MOVEMENT_TYPES.INCOME,
    amount: 3000,
    categoryId: "salary",
    date: "2026-08-01",
    description: "Salário mensual",
  },
  {
    id: "2",
    type: MOVEMENT_TYPES.EXPENSE,
    amount: 150,
    categoryId: "food",
    date: "2026-08-10",
    description: "Supermercado",
  },
  {
    id: "3",
    type: MOVEMENT_TYPES.EXPENSE,
    amount: 80,
    categoryId: "transport",
    date: "2026-08-05",
    description: "Transporte",
  },
];

describe("filterMovements", () => {
  it(
    "busca sin distinguir mayúsculas ni acentos",
    () => {
      const result = filterMovements(
        movements,
        {
          ...INITIAL_FILTERS,
          searchText: "salario",
        },
      );

      expect(
        result.map(
          (movement) => movement.id,
        ),
      ).toEqual(["1"]);
    },
  );

  it(
    "combina filtros de tipo, categoría y fecha",
    () => {
      const result = filterMovements(
        movements,
        {
          ...INITIAL_FILTERS,
          type: MOVEMENT_TYPES.EXPENSE,
          categoryId: "food",
          date: "2026-08-10",
        },
      );

      expect(
        result.map(
          (movement) => movement.id,
        ),
      ).toEqual(["2"]);
    },
  );
});

describe("sortMovements", () => {
  it(
    "ordena de la cantidad mayor a la menor",
    () => {
      const result = sortMovements(
        movements,
        SORT_OPTIONS.HIGHEST_AMOUNT,
      );

      expect(
        result.map(
          (movement) => movement.id,
        ),
      ).toEqual(["1", "2", "3"]);
    },
  );

  it(
    "ordena desde la fecha más antigua",
    () => {
      const result = sortMovements(
        movements,
        SORT_OPTIONS.OLDEST,
      );

      expect(
        result.map(
          (movement) => movement.id,
        ),
      ).toEqual(["1", "3", "2"]);
    },
  );
});

describe("getVisibleMovements", () => {
  it(
    "filtra y ordena sin modificar el arreglo original",
    () => {
      const originalOrder = movements.map(
        (movement) => movement.id,
      );

      const result = getVisibleMovements(
        movements,
        {
          ...INITIAL_FILTERS,
          type: MOVEMENT_TYPES.EXPENSE,
          sortBy:
            SORT_OPTIONS.LOWEST_AMOUNT,
        },
      );

      expect(
        result.map(
          (movement) => movement.id,
        ),
      ).toEqual(["3", "2"]);

      expect(
        movements.map(
          (movement) => movement.id,
        ),
      ).toEqual(originalOrder);
    },
  );
});