import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reducer = (state, action) => {
  // console.log("state", state);
  // console.log("action", action);
  if (action.type === "increment") {
    return{
      ...state,
      count: state.count + 1

    }
  }
  if (action.type === "decrement") {
    return{
      ...state,
      count: state.count - 1
    }
  }
  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  })
  
  const incerment = () => {
    dispatch({
      type: "increment",
    })
  }

  const decrement = () => {
    dispatch({
      type: "decrement",
    })
  }

  return (
    <div >
      count : {state.count}
      <br />
      <input /> <br />
      <button onClick={incerment} >increment</button>
      <button onClick={decrement} >decrement</button>
      <button type="submit">submit</button>
      {/* sub */}
    </div>
  );
}

export default App;
