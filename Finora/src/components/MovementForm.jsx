import { useState } from "react";
import { CATEGORIES, MOVEMENT_TYPES } from "../data/categories.js";
import {
  createMovement,
  validateMovementData,
} from "../utils/movementUtils.js";

const INITIAL_FORM = {
  type: MOVEMENT_TYPES.EXPENSE,
  amount: "",
  categoryId: "",
  date: "",
  description: "",
};

function MovementForm({ onAddMovement }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  const availableCategories = CATEGORIES.filter(
    (category) => category.type === formData.type,
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
      ...(name === "type" && { categoryId: "" }),
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
      ...(name === "type" && { categoryId: undefined }),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateMovementData(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddMovement(createMovement(formData));
    setFormData(INITIAL_FORM);
    setErrors({});
  }

  return (
    <section aria-labelledby="movement-form-title">
      <h2 id="movement-form-title">Nuevo movimiento</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="movement-type">Tipo</label>
        <select
          id="movement-type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value={MOVEMENT_TYPES.INCOME}>Ingreso</option>
          <option value={MOVEMENT_TYPES.EXPENSE}>Gasto</option>
        </select>

        <label htmlFor="movement-amount">Cantidad</label>
        <input
          id="movement-amount"
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
          aria-describedby={errors.amount ? "amount-error" : undefined}
          aria-invalid={Boolean(errors.amount)}
        />
        {errors.amount && <p id="amount-error">{errors.amount}</p>}

        <label htmlFor="movement-category">Categoría</label>
        <select
          id="movement-category"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          aria-describedby={errors.categoryId ? "category-error" : undefined}
          aria-invalid={Boolean(errors.categoryId)}
        >
          <option value="">Selecciona una categoría</option>
          {availableCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p id="category-error">{errors.categoryId}</p>
        )}

        <label htmlFor="movement-date">Fecha</label>
        <input
          id="movement-date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          aria-describedby={errors.date ? "date-error" : undefined}
          aria-invalid={Boolean(errors.date)}
        />
        {errors.date && <p id="date-error">{errors.date}</p>}

        <label htmlFor="movement-description">Descripción (opcional)</label>
        <input
          id="movement-description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Guardar movimiento</button>
      </form>
    </section>
  );
}

export default MovementForm;