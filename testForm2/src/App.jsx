import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <h1>Sign Up Form</h1>
          <div className=" input-block">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              {
                ...register("name", {required: "name is required", pattern: {
                  value: /[a-zA-Z]/,
                  message: "name should be in alphabets"  
                }})
              }
            />
            {
              errors.name &&
              <p>name is requred</p> 
            }
          </div>
          <div className=" input-block">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              {
                ...register("email", {required :"email is required"})
              }
            />
          </div>
          <div className=" input-block">
            <label htmlFor="pass">Pass : </label>
            <input
              type="password"
              name="pass"
              id="pass"
              {
                ...register("pass", { required: "password is required"})
              }
            />
          </div>
          <button type="submit" value="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
