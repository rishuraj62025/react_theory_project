import { useState } from 'react'

import './App.css'

function App() {
  let [color, setColor] = useState("black")

  return (
    <div className=" w-screen h-screen  rounded-xl" style={{backgroundColor: color}}>
      <h1 className='font-bold justify-center text-center py-10 px-3 text-3xl text-white'>Background Changer Project</h1>
      <div className='fixed flex flex-wrap bottom-20 justify-center px-2 inset-x-0'>
           <div className='fixed flex flex-wrap gap-4 justify-center shadow-xl bg-white px-3 py-2 rounded-2xl '>
          <button onClick={()=>setColor("red")} style={{backgroundColor: "red"}} className='rounded-xl px-2 py-0.5 text-xl'>Red</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}} className='rounded-xl px-2 py-0.5 text-xl'>Blue</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor: "yellow"}} className='rounded-xl px-2 py-0.5 text-xl'>Yellow</button>
          <button onClick={()=>setColor("olive")} style={{backgroundColor: "olive"}} className='rounded-xl px-2 py-0.5 text-xl'>Olive</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor: "green"}} className='rounded-xl px-2 py-0.5 text-xl'>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
