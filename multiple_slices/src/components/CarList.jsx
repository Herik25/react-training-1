import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const handleCarDelete = (car) => {
    // console.log(car.id);
    dispatch(removeCar(car.id));
  };
  const renderCars = cars.map((car) => {
    return (
      <div
        key={car.id}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className=" button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  // console.log(renderCars);

  return (
    <div className={`panel`}>
      {/* {car.name} - ${car.cost} */}
      {renderCars}
    </div>
  );
}

export default CarList;
