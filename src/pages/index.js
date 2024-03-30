import Link from "next/link";
import carsData from "../cars.json";

export default function Home({ cars }) {
  return (
    <div className="carlistContainer">
      <h1 className="carlistHeading">Car List</h1>
      <ul className="carList">
        {cars.map((car) => (
          <Link href={`/cars/${encodeURIComponent(car.model)}`}>
            <li key={car.model} className="carCard">
              <span>
                {car.brand} {car.model}
              </span>
              <span
                className="indicator"
                style={{
                  background: `${car.color}`,
                }}
              ></span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch car data from cars.json
  const cars = carsData.cars;
  return {
    props: { cars },
  };
}
