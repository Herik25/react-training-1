import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const initialValues = {
    name: "",
    email: "",
    pass: "",
  };
  const [formvalue, setFormValue] = useState(initialValues);
  const [formErros, setFormErros] = useState({});
  console.log(formErros);
  console.log(formvalue);

  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    setFormValue({
      ...formvalue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErros(validate(formvalue));
  };

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.pass) {
      errors.pass = "Password is required";
    }
    return errors;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up Form</h1>
        <div className=" input-block">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formvalue.name}
          />
          {formErros.name && (
            <div style={{ color: "red" }}>{formErros.name}</div>
          )}
        </div>
        <div className=" input-block">
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" id="email" onChange={handleChange} />
          <div>{formErros.email}</div>
        </div>
        <div className=" input-block">
          <label htmlFor="pass">Pass : </label>
          <input
            type="password"
            name="pass"
            id="pass"
            onChange={handleChange}
          />
          {formErros.pass && <div>{formErros.pass}</div>}
        </div>
        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
