import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task")
    for(let i=0; i<=1000000000; i++) {}
    return num*2
  }

  let doubleValue = useMemo (() => expensiveTask(input), [input]);
  //Agar input ki value purani hai toh function nhi chalega 

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>
      <br /> <br />
      <div>
        Count : {count}
      </div>
      <br /> <br />
      <input 
        type="number"
        placeholder='Enter Number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
      <br /><br />   
      <div>
        Double Value : {doubleValue};
      </div>
    </div>
  )
}

export default App
