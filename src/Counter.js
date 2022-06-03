import React, {useState} from "react";

export function ClickTracker() {
    const [count, setCount] = useState(0)

    const handleClick = () => { 
       setCount(count + 1)
    }

    return (
            <div>
              <button onClick={handleClick}>Increment</button>
              <h1>The current value is: {count}</h1>
            </div>
    )
}