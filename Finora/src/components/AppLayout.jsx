import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <Navigation />

      <main id="main-content" className="container">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;