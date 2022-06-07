import {useCounter} from "./useCounter";

export function Counter() {
  const {count, increment, decrement, reset} = useCounter()


  return (
    <>
      <h1>{count}</h1>

      <div className="button-area">
        <button onClick={increment}>Incremenet</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
} 