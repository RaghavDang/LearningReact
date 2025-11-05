import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
// let counter=5

const addValue=()=>{
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  setCounter(prevCounter=>prevCounter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // console.log(counter);
}
const decValue=()=>{
  setCounter(counter-1)
  console.log(counter);
}
const reset=()=>{
  setCounter(0)
  console.log(counter);
}
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={decValue}>Remove Value</button>
     <br />
     
      {/* {counter>0?
       <button onClick={reset}>Reset</button>:
       ""}
      */}
    </>
  )
}

export default App
