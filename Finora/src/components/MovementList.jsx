import { CATEGORIES, MOVEMENT_TYPES } from "../data/categories.js";

function getCategoryName(categoryId) {
  const category = CATEGORIES.find((item) => item.id === categoryId);

  return category?.name ?? "Sin categoría";
}

function MovementList({ movements }) {
  return (
    <section aria-labelledby="movements-title">
      <h2 id="movements-title">Movimientos de ejemplo</h2>

      <ul>
        {movements.map((movement) => (
          <li key={movement.id}>
            <strong>{movement.description}</strong>
            {" — "}
            {getCategoryName(movement.categoryId)}
            {" — "}
            {movement.type === MOVEMENT_TYPES.INCOME ? "+" : "-"}
            {movement.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovementList;
