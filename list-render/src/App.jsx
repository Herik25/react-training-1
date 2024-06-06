import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const users = [
    {
      name: "harsh",
      age: 20,
      role: "developer",
      address: "pune",
      city: "rajkot",
      pincode: 123456,
      skills: {
        techniacalRole: "React developer",
        frontEnd: "React",
        backEnd: "Node",
        database: "mongoDB"
      }
    },
    {
      name: "abhishek",
      age: 25,
      address: "banglor",
      city: "rjk",
      pincode: 123456,
      
    },
    {
      name: "vandan",
      age: 10,
      address: "pune",
      city: "rajkot",
      pincode: 123456,
      
    },
    {
      name:"smit",
      age: 100,
      address: "pune",
      city: "rajkot",
      pincode: 123456,
      
    }
  ]

  return (
    <div>
      {users.map((obj, index) => {
        return (
          <div key={index} style={{ fontSize: "20px", marginBottom: "50px", border: "1px solid black"}}>
            <div>Name: {obj.name}</div>
            <div>Age: {obj.age}</div>
            { obj.role && <div>Role: {obj.role}</div>}
            <div>Adderess: {obj.address}</div>
            <div>City: {obj.city}</div>
            <div>Pincode: {obj.pincode}</div>
            <div>skills: {obj.skills?.frontEnd}</div>
          </div>
        )
      })}
    </div>
  )
}

export default App
