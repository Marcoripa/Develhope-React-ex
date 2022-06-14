import {store} from './Redux/Store'
import {incrementCounter} from './Redux/CounterReducer'



store.dispatch(incrementCounter())

console.log(store.getState())

