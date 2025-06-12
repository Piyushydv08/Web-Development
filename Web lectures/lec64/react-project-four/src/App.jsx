import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'
import Button from './components/Button'

function App() {
  const[count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick = {handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>  



      {/* <Card name="Piyush Yadav">
        <h1>Best Web Dev</h1>
        <p>Trying to be consistent in Web Dev</p>
        <p>Will Become Good Web Developer</p>
      </Card>
      <Card children='Mai ek children hu'>
      </Card> */}
    </div>
  )
}

export default App
