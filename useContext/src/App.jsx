import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterContext from './context/CounterContext'

function App() {
  const { count, increment, decrement } = useContext(CounterContext)

  return (
    <>
      <p>count : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App