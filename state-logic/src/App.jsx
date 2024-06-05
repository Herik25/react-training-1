import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "harsh",
    age: 20,
    address: "pune",
    city: "rajkot",
    pincode: 123456,
  });
  const [arr, setArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // user = {
  //   name: "harsh",
  //   age: 20,
  //   address: "pune"
  // }

  const [bool, setBool] = useState(false);

  const hanldeChange = () => {
    setBool(!bool);
    setUser({
      ...user,
      age: 21,
    });
  };
  let el = ""
  if (bool) {
    el = <h1> hello harsh </h1>
  } else {
    el = "who are you?"
  }

  return (
    <div>
      {/* <p>name : {user.name}</p>
      <p>age : {user.age}</p>
      <p>loc : {user.address}</p>
      <p>city : {user.city}</p>
      <p>pincode : {user.pincode}</p> */}
      {/* <h1>{bool ? "this is true" : "this is false"}</h1>
      <h1>{arr[7]}</h1>*/}
      {bool ? (
        <div
          style={{
            backgroundColor: "red",
            height: "400px",
            width: "400px",
            marginBottom: "20px",
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: "green",
            height: "400px",
            width: "400px",
            marginBottom: "20px",
          }}
        ></div>
      )}
      {
        el
      }

      <button onClick={hanldeChange}> modify</button>
    </div>
  );
}

export default App;
