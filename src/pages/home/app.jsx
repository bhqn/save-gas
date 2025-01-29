import React from "react";
import Home from "./home"; // Importe o componente Home
import Header from "./header";
import Footer from "./footer";
import MapGoogle from "./mapgoogle";

const App = () => {
  return (
    <div>
   
      <Header/>
      <Home />
      <Footer/>
      <MapGoogle />
     
    </div>
  );
};

export default App;