import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "./store/thunks/FetchJokes";

function App() {
  const dispatch = useDispatch();
  const {joke, error, loading} = useSelector(state => state.jokes)

  useEffect(() => {
    dispatch(fetchJokes());
  }, []);

  return (
   loading ?
   <div>loading.....</div>
   :
   <div>
   {joke.setup} <br />
   {joke.punchline}
   </div>
  )
}

export default App;
