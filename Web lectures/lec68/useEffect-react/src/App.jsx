import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/timerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  const[count, setCount] = useState(0);
  const[total, setTotal] = useState(0);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependent list
  // useEffect( () => {
  //   first 

  //   return () => {
  //     second
  //   }

  // }, [third])

  //variation:1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  //variation:2
  //that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // }, [])

  //variation:3
  //runs every time when count will updated
  // useEffect(()=> {
  //   alert("I will run every time when count is update")
  // }, [count])

  //variation:4
  //multiple dependencies
  // useEffect(()=> {
  //   alert("I will run every time when count/total is update")
  // }, [count, total])

  //variation:5
  //use cleanup function
  // useEffect( () => {
  //   alert("Count is Updated")
  //   return () => {
  //     alert("Count is unmounted from UI")
  //   }
  // }, [count])

  function handleClick() {
    setCount(count+1);
  }

  function handleTotal() {
    setTotal(total+1);
  }

  return (
    <div>

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />

      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      Count is : {count} 
      <br />
      <button onClick={handleTotal}>
        Update Total
      </button>
      <br />
      Total is : {total}  */}
    </div>
  )
}

export default App
