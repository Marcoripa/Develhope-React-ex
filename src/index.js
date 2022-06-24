import {store} from './Redux/Store'
import {addTodo, deleteTodo, editTodo} from './Redux/TodosReducer'

//initial state
console.log(store.getState())

//add an item
store.dispatch(addTodo(3, 'Bake a cake', false))
console.log(store.getState())

//delete an item
store.dispatch(deleteTodo(1))
console.log(store.getState())

//edit an item
store.dispatch(editTodo(2, 'New Title', true))
console.log(store.getState())





