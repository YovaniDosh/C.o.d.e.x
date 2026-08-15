import { useState } from "react";

import FinancialSummary from "../components/FinancialSummary.jsx";
import MovementFilters from "../components/MovementFilters.jsx";
import MovementForm from "../components/MovementForm.jsx";
import MovementList from "../components/MovementList.jsx";

import {
  SAMPLE_MOVEMENTS,
} from "../data/sampleMovements.js";

import {
  calculateFinancialSummary,
} from "../utils/financeCalculations.js";

import {
  INITIAL_FILTERS,
  getVisibleMovements,
} from "../utils/movementFilters.js";

function DashboardPage() {
  const [movements, setMovements] =
    useState(SAMPLE_MOVEMENTS);

  const [
    editingMovement,
    setEditingMovement,
  ] = useState(null);

  const [filters, setFilters] =
    useState(INITIAL_FILTERS);

  const financialSummary =
    calculateFinancialSummary(movements);

  const visibleMovements =
    getVisibleMovements(
      movements,
      filters,
    );

  function handleAddMovement(newMovement) {
    setMovements((currentMovements) => [
      newMovement,
      ...currentMovements,
    ]);
  }

  function handleUpdateMovement(
    updatedMovement,
  ) {
    setMovements((currentMovements) =>
      currentMovements.map((movement) =>
        movement.id === updatedMovement.id
          ? updatedMovement
          : movement,
      ),
    );

    setEditingMovement(null);
  }

  function handleDeleteMovement(movementId) {
    const shouldDelete = window.confirm(
      "¿Quieres eliminar este movimiento?",
    );

    if (!shouldDelete) {
      return;
    }

    setMovements((currentMovements) =>
      currentMovements.filter(
        (movement) =>
          movement.id !== movementId,
      ),
    );

    if (editingMovement?.id === movementId) {
      setEditingMovement(null);
    }
  }

  function handleFilterChange(name, value) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,

      ...(name === "type" && {
        categoryId: "all",
      }),
    }));
  }

  return (
    <>
      <h1>Panel financiero</h1>

      <FinancialSummary
        summary={financialSummary}
      />

      <MovementForm
        editingMovement={editingMovement}
        onAddMovement={handleAddMovement}
        onCancelEdit={() =>
          setEditingMovement(null)
        }
        onUpdateMovement={
          handleUpdateMovement
        }
      />

      <MovementFilters
        filters={filters}
        onChange={handleFilterChange}
        onClear={() =>
          setFilters(INITIAL_FILTERS)
        }
      />

      <MovementList
        emptyMessage={
          movements.length === 0
            ? "No hay movimientos registrados todavía."
            : "No hay movimientos que coincidan con la búsqueda."
        }
        movements={visibleMovements}
        onDeleteMovement={
          handleDeleteMovement
        }
        onEditMovement={
          setEditingMovement
        }
      />
    </>
  );
}

export default DashboardPage;