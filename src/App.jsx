import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {

  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Amarela",
      newCar: true,
      km: 0,
    },

    {
      id: 2,
      brand: "RedBull",
      color: "Roxa",
      newCar: false,
      km: 10030,
    },

    {
      id: 3,
      brand: "Mercedes",
      color: "Prata",
      newCar: false,
      km: 3310,
    },
  ];

  return (
    <div className="App">
      <h1>Desafio 5 CSS</h1>
      {cars.map((car) => (
        <CarDetails
          car={car}
        />
      ))}
      
    </div>
  );
}

export default App;
