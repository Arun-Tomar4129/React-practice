import { useState } from "react"

function App() {
  const [color, setcolor]= useState("plive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{
      backgroundColor:color}}>
        <div className="fixed flex flex-wrap jusity-center bottom-12 insert-x-0 px-2">test</div>

    </div>
     </>
  )
}

export default App
