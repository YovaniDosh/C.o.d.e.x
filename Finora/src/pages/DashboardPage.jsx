import { useState } from "react";

import FinancialSummary from "../components/FinancialSummary.jsx";
import MovementForm from "../components/MovementForm.jsx";
import MovementList from "../components/MovementList.jsx";

import { SAMPLE_MOVEMENTS } from "../data/sampleMovements.js";

import {
  calculateFinancialSummary,
} from "../utils/financeCalculations.js";

function DashboardPage() {
  const [movements, setMovements] =
    useState(SAMPLE_MOVEMENTS);

  const financialSummary =
    calculateFinancialSummary(movements);

  function handleAddMovement(newMovement) {
    setMovements((currentMovements) => [
      newMovement,
      ...currentMovements,
    ]);
  }

  return (
    <>
      <h1>Panel financiero</h1>

      <FinancialSummary
        summary={financialSummary}
      />

      <MovementForm
        onAddMovement={handleAddMovement}
      />

      <MovementList
        movements={movements}
      />
    </>
  );
}

export default DashboardPage;