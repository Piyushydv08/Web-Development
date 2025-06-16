import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComp from './components/ChildComp';
import ExpensiveComp from './components/ExpensiveComp';

function App() {
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count+1);
  // }

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);
  //yaha function freeze ho raha hai hamesha output 1 aayega agar dependencies mai kuch na dale toh aur dependencies mai count daal denge toh function chlne lag jayega

  return (
    <div>
      {/* <button onClick={handleClick}>
        Increment
      </button>
      <br /> <br />
      <div>
        Count : {count}
      </div>
      <br /> <br />
      <div>
        <ChildComp 
          buttonName="Click Me"
          handleClick={handleClick}
        /> */}
        {/* Yeah bhi render ho raha hai jab ham increment pe click krte hai toh kyunki count badta hai aur pura app ka function render hota hai ishe bachne ke liye ham useCallback ka us karenege  */}
        {/* React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nhi toh nhi honge */}
      {/* </div> */}
      <ExpensiveComp />
      
    </div>
  )
}

export default App
