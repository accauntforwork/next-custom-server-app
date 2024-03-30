import { useRouter } from "next/router";
import carsData from "../../cars.json";
import Link from "next/link";

export default function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;

  const car = carsData.cars.find((c) => c.model === carId);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="carcontainer">
      <h1 className="carName">
        <h2>{car.brand}</h2>
        <h2>{car.model}</h2>
      </h1>
      <div id="carColor">
        <p>Color: {car.color}</p>
        <span
          style={{
            background: `${car.color}`,
          }}
        ></span>
      </div>
      <hr />
      <p className="carPrice">Price: {car.price}</p>
      <hr />
      <p>Year: {car.year}</p>
      <hr />
      <Link href={`/`}>
        <button className="goToBackBtn">Go Back</button>
      </Link>
    </div>
  );
}
