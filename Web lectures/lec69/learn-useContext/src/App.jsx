import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';

//step 1: create context
// const UserContext = createContext();
//step 2: wrap all child inside a provider 
//step 3: pass value
//step 4: consumer k andar jaake consume karlo 

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Piyush Yadav"});
  const [theme, setTheme] = useState('light');

  return (

      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA />
        </div>
        
      </ThemeContext.Provider>



    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
