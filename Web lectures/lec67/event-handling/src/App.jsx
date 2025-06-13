import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick() {
    alert("I am Clicked")
  }

  function handleMouseOver() {
    alert("PAra ke upar mouse lekar aaye ho")
  }

  function handleInputChange(e) {
    console.log("value till now :", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submit krr du kyaa")
  }

  return (
    <div>

      <button onClick={alert("Button click hua h")}>
        {/* yeah glt tarika hai isme event immediately render ho jayega bina click kiye isliye hame function bnana padega taki vo na ho ---onClick={() => alert("Button pe clcik hua")}--- */}
        Click Me
      </button>

      {/* <form>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am para
      </p>


      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
  )
}

export default App
