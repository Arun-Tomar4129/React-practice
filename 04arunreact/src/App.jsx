import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black"); // Example default color

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color,width: "100vw", height: "100vh" }}>
        <div className="fixed flex  inset-x-0 px-2 "> 
          <div className='flex flex-wrap jusify-center gap-4 shadow-lg bg-white px-2 py-3 ' style={{width:"800px", background:"yellow", height:"80px" ,border:"20px"}}>
            <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full  text-white'>red</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full  text-white'>blue</button>
            <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full  text-white'>green</button>
            <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full  text-white'>pink</button>
            <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full  text-white'>orange</button>
            <button onClick={()=> setColor("brown")} className='outline-none px-4 py-1 rounded-full  text-white'>brown</button>
            <button onClick={()=> setColor("darkblue")} className='outline-none px-4 py-1 rounded-full  text-white'>darkblue</button>
            <button onClick={()=> setColor("skyblue")} className='outline-none px-4 py-1 rounded-full  text-white'>skyblue</button>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default App
