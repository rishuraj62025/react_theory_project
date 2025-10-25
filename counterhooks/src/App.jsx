import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(10);

  let addValue = ()=>{
    if(counter<20)
    setCounter(counter+1)
  // yahan pe setCounter(counter+1) ko kitna bhi baar chalaenge phir bhi
  // ek hi baar chalega, agar hmko chaiye ki ye baar baar chale to kyonki
  // setCounter  ek function hi hai to setCounter(prevCounter => prevCounter + 1)
  // aise krke chala skte hain to jo previous counter ka jo value hai wo iss
  // prevCounter variable mein aa jaega aur phir wo update ho jaega
  }

  let removeValue =  () =>{
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h1>Counter with Hooks :{counter}</h1>
      
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>

      <p>
        footer : {counter}
      </p>

    </>
  )
}

export default App
