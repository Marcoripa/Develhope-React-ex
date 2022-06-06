import {useState} from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
       setCount((c) => c + 1)
    }

    const decrement = () => {
       setCount((c) => c - 1)
    }

    const reset = () => {
       setCount(0)
    }

    return {
        count: count,
        onIncrement: increment,
        onDecrement: decrement,
        onReset: reset
    }
}