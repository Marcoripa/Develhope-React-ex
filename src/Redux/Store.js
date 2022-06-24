import {createStore} from 'redux'
import {TodosReducer} from './TodosReducer'

export const store = createStore(TodosReducer)
