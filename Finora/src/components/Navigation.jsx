const NAVIGATION_ITEMS = [
  { id: "summary", label: "Resumen", href: "#financial-summary" },
  { id: "movements", label: "Movimientos", href: "#movements" },
  { id: "budgets", label: "Presupuestos", href: "#budgets" },
  { id: "goals", label: "Metas", href: "#goals" },
  { id: "simulators", label: "Simuladores", href: "#simulators" },
];

function Navigation() {
  return (
    <nav aria-label="Navegación principal">
      <ul>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              aria-current={item.id === "summary" ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;