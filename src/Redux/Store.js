import {combineReducers, createStore} from 'redux';
import {todosReducer} from './TodosReducer';
import {counterReducer} from './CounterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todosReducer
})

export const store = createStore(rootReducer)
