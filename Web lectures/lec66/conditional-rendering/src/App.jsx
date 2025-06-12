import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  if(!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }

  return (
    <div>
      <h1>Welcome to Piyush Website</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}
export default App
