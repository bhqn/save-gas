import React, { useEffect, useState } from "react";
import Form from "./form"; // Importe o componente Form
import "./style.css"; // Importe o CSS
import "leaflet/dist/leaflet.css"; // Importe o CSS do Leaflet
import L from "leaflet"; // Importe o Leaflet

const Home = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (data) => {
    console.log("Dados do formulário:", data);
    setResult(data);
  };

  // Inicialize o mapa usando useEffect
  useEffect(() => {
    const map = L.map("map").setView([-15.7801, -47.9292], 13); // Coordenadas de Brasília, por exemplo

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Adicione um marcador
    L.marker([-15.7801, -47.9292])
      .addTo(map)
      .bindPopup("Localização inicial")
      .openPopup();

    // Limpe o mapa ao desmontar o componente
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="container">
      <Form onSubmit={handleFormSubmit} />
      {result && (
        <div >
          <h2>Resultado:</h2>
          <p>Origem: {result.origem}</p>
          <p>Destino: {result.destino}</p>
          <p>Consumo: {result.consumo} km/m³</p>
        </div>
      )}

      <div id="map" className="map"></div>

      <div>
        
      </div>
    </div>
  );
};

export default Home;