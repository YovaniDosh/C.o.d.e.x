import {
  CATEGORIES,
  MOVEMENT_TYPES,
} from "../data/categories.js";

function getCategoryName(categoryId) {
  const category = CATEGORIES.find(
    (item) => item.id === categoryId,
  );

  return category?.name ?? "Sin categoría";
}

function MovementList({
  emptyMessage,
  movements,
  onDeleteMovement,
  onEditMovement,
}) {
  return (
    <section
      id="movements"
      aria-labelledby="movements-title"
    >
      <h2 id="movements-title">
        Movimientos
      </h2>

      {movements.length === 0 ? (
        <p>{emptyMessage}</p>
      ) : (
        <ul>
          {movements.map((movement) => (
            <li key={movement.id}>
              <strong>
                {movement.description ||
                  "Sin descripción"}
              </strong>

              {" — "}

              {getCategoryName(
                movement.categoryId,
              )}

              {" — "}

              {movement.type ===
              MOVEMENT_TYPES.INCOME
                ? "+"
                : "-"}

              {movement.amount.toFixed(2)}

              {" "}

              <button
                type="button"
                onClick={() =>
                  onEditMovement(movement)
                }
              >
                Editar
              </button>

              {" "}

              <button
                type="button"
                onClick={() =>
                  onDeleteMovement(movement.id)
                }
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MovementList;