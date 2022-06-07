import {useCallback, useState} from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    const increment = useCallback(function increment() {
      setCount((c) => c + 1)
   }, [])

    const decrement = useCallback(function decrement() {
       setCount(c => c - 1)
    }, [])

    const reset = useCallback(function reset() {
       setCount(0)
    }, [])


    return {
        count,
        increment,
        decrement,
        reset
    }
}