import React from "react";
import { useRouter } from "next/router";

export default function CarDetailsPage({ model }) {
  const router = useRouter();
  const { cars } = require("../../cars.json");

  const car = cars.find((c) => c.model === model);

  if (!car) {
    return <div>Car not found!</div>;
  }

  return (
    <div>
      <h1>
        {car.brand} - {car.model}
      </h1>
      <p>Car Body: {car.carBody}</p>
      <p>Color: {car.color}</p>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}

export async function getStaticPaths() {
  const cars = require("../../cars.json").cars;

  const paths = cars.map((car) => ({
    params: { model: car.model.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
