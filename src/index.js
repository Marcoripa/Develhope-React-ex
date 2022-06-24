import { incrementCounter, decrementCounter } from './Redux/CounterReducer'
import {store} from './Redux/Store'
import {addTodo, deleteTodo, editTodo} from './Redux/TodosReducer'

//initial state
store.subscribe(() => {
    console.log(store.getState())
})

//add an item
store.dispatch(addTodo(3, 'Bake a cake', false))


//increment counter
store.dispatch(incrementCounter())


//delete an item
store.dispatch(deleteTodo(1))

//increment counter
store.dispatch(incrementCounter())

//decrement counter
store.dispatch(decrementCounter())


//edit an item
store.dispatch(editTodo(2, 'New Title', true))






