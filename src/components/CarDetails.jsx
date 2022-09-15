import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  /*   const cars = [
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
  ]; */

  return (
    <div className={styles.car_card}>
      <h2>Detalhes do carro</h2>

      {/* <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} - {car.color} - {car.km}
          </li>
        ))}
      </ul> */}

      <ul className={styles.car_details}>
        <li>Marca: {car.brand}</li>
        <li>KM: {car.km}</li>
        <li>Cor: {car.color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
