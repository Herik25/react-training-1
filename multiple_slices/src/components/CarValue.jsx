import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // let cost = 0;
    // filteredCars.forEach((car) => {
    //   cost += car.cost;
    // });
    // return cost
    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });
  return <div className="car-value">Total Cost : $ {totalCost} </div>;
}

export default CarValue;
