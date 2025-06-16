import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);
//   //Agar ham useRef use nhi krte toh val ki value 0 ho jaati hrr render pe hame output pe hamesha 1 milta

//   let btnRef = useRef();

// function handleIncrement() {
//   val.current = val.current+1;
//   console.log("Value of Val : ", val.current)
//   setCount(count+1);
// }  

// function changeColor() {
//   btnRef.current.style.backgroundColor = "red";
// }

// //it will runs on every render
// useEffect(() => {
//   console.log("Main firse render hogya hu")
// })

const [time, setTime] = useState(0);

let timerRef = useRef(null);

function startTimer() {
  timerRef.current = setInterval(() => {
    setTime(time => time+1);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerRef.current);
  timerRef.current = null;
}

function resetTimer() {
  stopTimer();
  setTime(0);

}


  return (
    <div>
      <h1>StopWAtch : {time} secomds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /> <br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />

      <button onClick={resetTimer}>
        Reset
      </button>
      <br /> <br />
      
      

      {/* <button
      ref={btnRef} 
      onClick={handleIncrement}>
        Increment
      </button>
      <br /> <br />
      <button onClick={changeColor}>
        Change Color of 1st button
      </button>
      <br /> <br /> 
      <div>
        Count : {count}
      </div> */}
    </div>
  )
}

export default App
