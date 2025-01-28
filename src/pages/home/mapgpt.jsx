import 'leaflet/dist/leaflet.css'; // Importe o CSS do Leaflet
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapGPT = ({ postos }) => {
  return (
    <MapContainer center={[-23.5505, -46.6333]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {postos.map((posto) => (
        <Marker key={posto.id} position={[posto.latitude, posto.longitude]}>
          <Popup>
            {posto.nome} - Preço: R$ {posto.preco.toFixed(2)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapGPT;