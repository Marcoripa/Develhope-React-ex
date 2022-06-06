import {useCounter} from "./useCounter";

export function Counter() {
  const {count, onIncrement, onDecrement, onReset} = useCounter()


  return (
    <>
      <h1>{count}</h1>

      <div className="button-area">
        <button onClick={onIncrement}>Incremenet</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </>
  )
} 