import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(1);
  const [str, setStr] = useState("");

  useEffect(() => {
    // console.log("this use effect is called");
    const listen = () => {
      console.log("listen");
    }
    document.body.addEventListener("click", listen)
    return () => {
      document.body.removeEventListener("click", listen)
    }
  }, [count, secondCount]);
  

  return (
    <div onClick={() => setSecondCount(secondCount + 1)}>
      <div>the value of count = {count}</div>
      <button
        className=" p-2 border-[1px] border-[#000]"
        onClick={() => setCount(count + 1)}
      >
        increament
      </button>
      {/* <div>the value of second count = {secondCount}</div>
      <button
        className=" p-2 border-[1px] border-[#000]"
        onClick={() => setSecondCount(secondCount + 1)}
      >
        increament
      </button>
      <div>
        <button
          className=" p-2 border-[1px] border-[#000]"
          onClick={() => setStr(`set string = ${count}`)}
        >
          modify
        </button>
      </div> */}
    </div>
  );
}

export default App;
