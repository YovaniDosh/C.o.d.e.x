function FinancialSummary({ summary }) {
  return (
    <section aria-labelledby="summary-title">
      <h2 id="summary-title">Resumen financiero</h2>

      <dl>
        <div>
          <dt>Ingresos</dt>
          <dd>{summary.totalIncome.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Gastos</dt>
          <dd>{summary.totalExpenses.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Saldo</dt>
          <dd>{summary.balance.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Porcentaje de ahorro</dt>
          <dd>{summary.savingsPercentage.toFixed(1)}%</dd>
        </div>
      </dl>
    </section>
  );
}

export default FinancialSummary;