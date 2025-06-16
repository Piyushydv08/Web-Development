import React, {useState, useEffect, useRef } from 'react'
import { useCallback } from 'react';

const ExpensiveComp = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("Running Expensive Calclulation...")
        let result = 0;
        for(let i=0; i<=1000000000; i++) {
            result += 1;
        }
        return result;
    }, [count]);

    useEffect(() => {
        if(previousFunction.current) {
            if(previousFunction.current === expensiveCalculation) {
                console.log("Function not re-created");
            }
            else{
                console.log("Function got re-created");
            }
        }
        else{
            previousFunction.current = expensiveCalculation;
        }
    }, [expensiveCalculation])

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.avlue)}
        placeholder='Type Something'
       />
      <p>Expensive Calculation Result : {expensiveCalculation()}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComp
