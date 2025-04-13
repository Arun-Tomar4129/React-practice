import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter , setcounter]= useState(15)
  // let counter = 15 

  const addvalue =()=>{
    setcounter(counter + 1)
    // counter = counter + 1
    console.log("value added",counter)
  }
const removevalue = ()=>{
  if(counter>0 ){
    setcounter(counter - 1)
  } else{
    console.log("only posttive number")
  }
  
}

  return (
    <>
      <h1>arun with code</h1>
      <h2>value: {counter}</h2>
      <button onClick={addvalue}> add value </button><br /><hr />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
