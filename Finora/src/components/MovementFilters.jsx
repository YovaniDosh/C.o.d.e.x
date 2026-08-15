import { CATEGORIES, MOVEMENT_TYPES } from "../data/categories.js";
import { SORT_OPTIONS } from "../utils/movementFilters.js";

function MovementFilters({ filters, onChange, onClear }) {
  function handleChange(event) {
    const { name, value } = event.target;

    onChange(name, value);
  }

  return (
    <section aria-labelledby="movement-filters-title">
      <h2 id="movement-filters-title">Buscar y filtrar</h2>

      <label htmlFor="movement-search">Buscar por descripción</label>
      <input
        id="movement-search"
        name="searchText"
        type="search"
        value={filters.searchText}
        onChange={handleChange}
      />

      <label htmlFor="movement-type-filter">Tipo</label>
      <select
        id="movement-type-filter"
        name="type"
        value={filters.type}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value={MOVEMENT_TYPES.INCOME}>Ingresos</option>
        <option value={MOVEMENT_TYPES.EXPENSE}>Gastos</option>
      </select>

      <label htmlFor="movement-category-filter">Categoría</label>
      <select
        id="movement-category-filter"
        name="categoryId"
        value={filters.categoryId}
        onChange={handleChange}
      >
        <option value="all">Todas</option>
        {CATEGORIES.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="movement-date-filter">Fecha</label>
      <input
        id="movement-date-filter"
        name="date"
        type="date"
        value={filters.date}
        onChange={handleChange}
      />

      <label htmlFor="movement-sort">Ordenar</label>
      <select
        id="movement-sort"
        name="sortBy"
        value={filters.sortBy}
        onChange={handleChange}
      >
        <option value={SORT_OPTIONS.NEWEST}>Fecha más reciente</option>
        <option value={SORT_OPTIONS.OLDEST}>Fecha más antigua</option>
        <option value={SORT_OPTIONS.HIGHEST_AMOUNT}>Cantidad mayor</option>
        <option value={SORT_OPTIONS.LOWEST_AMOUNT}>Cantidad menor</option>
      </select>

      <button type="button" onClick={onClear}>
        Limpiar filtros
      </button>
    </section>
  );
}

export default MovementFilters;