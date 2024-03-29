import React from "react";
import { useRouter } from "next/router";

const cars = require("../cars.json").cars;

export default function HomePage() {
  const router = useRouter();

  const handleCarClick = (car) => {
    router.push(`/cars/${car.model}`);
  };

  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.model}>
            <button onClick={() => handleCarClick(car)}>{car.model}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
