export const SORT_OPTIONS = {
  NEWEST: "newest",
  OLDEST: "oldest",
  HIGHEST_AMOUNT: "highest-amount",
  LOWEST_AMOUNT: "lowest-amount",
};

export const INITIAL_FILTERS = {
  searchText: "",
  type: "all",
  categoryId: "all",
  date: "",
  sortBy: SORT_OPTIONS.NEWEST,
};

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function filterMovements(movements, filters) {
  const normalizedSearch = normalizeText(filters.searchText);

  return movements.filter((movement) => {
    const matchesSearch = normalizeText(movement.description).includes(
      normalizedSearch,
    );
    const matchesType =
      filters.type === "all" || movement.type === filters.type;
    const matchesCategory =
      filters.categoryId === "all" ||
      movement.categoryId === filters.categoryId;
    const matchesDate = !filters.date || movement.date === filters.date;

    return matchesSearch && matchesType && matchesCategory && matchesDate;
  });
}

export function sortMovements(movements, sortBy) {
  return [...movements].sort((firstMovement, secondMovement) => {
    switch (sortBy) {
      case SORT_OPTIONS.OLDEST:
        return firstMovement.date.localeCompare(secondMovement.date);
      case SORT_OPTIONS.HIGHEST_AMOUNT:
        return secondMovement.amount - firstMovement.amount;
      case SORT_OPTIONS.LOWEST_AMOUNT:
        return firstMovement.amount - secondMovement.amount;
      case SORT_OPTIONS.NEWEST:
      default:
        return secondMovement.date.localeCompare(firstMovement.date);
    }
  });
}

export function getVisibleMovements(movements, filters) {
  return sortMovements(filterMovements(movements, filters), filters.sortBy);
}