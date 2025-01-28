import React from "react";
import Home from "./home"; // Importe o componente Home

const App = () => {
  return (
    <div>
     <header className="header">
  <div className="header-content">
    <h1 className="header-title">SaveGas</h1>
    <p className="header-subtitle">Economize combustível, salve o planeta.</p>
  </div>
</header>
      <Home />
    </div>
  );
};

export default App;