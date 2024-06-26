import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'

function App() {

  return (
    <>
      <CarForm />
      <CarList />
      <CarSearch />
    </>
  )
}

export default App
