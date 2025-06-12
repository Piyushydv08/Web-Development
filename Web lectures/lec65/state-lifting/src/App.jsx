import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //Sabhi child me state ko sync karwa denge

  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName}>
      <p>I am inside Parent Component and value of name is {name}</p>

      </Card>
    </div>
  )
}

export default App
