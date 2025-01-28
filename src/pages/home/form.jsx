import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [consumo, setConsumo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ origem, destino, consumo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Origem"
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destino"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
      />
      <input
        type="number"
        placeholder="Consumo (km/m³)"
        value={consumo}
        onChange={(e) => setConsumo(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;