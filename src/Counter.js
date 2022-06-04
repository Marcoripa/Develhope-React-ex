import React, {useState, useEffect} from "react";

export function ClickTracker({counterChange}) {
    const [count, setCount] = useState(0)

    const handleClick = () => { 
      setCount(count + 1)
    }
    
  useEffect(() => {
      counterChange(count)
    }, [count, counterChange])
  
   
    return (
            <div>
              <button onClick={handleClick}>Increment</button>
              <h1>The current value is: {count}</h1>
            </div>
    )
}