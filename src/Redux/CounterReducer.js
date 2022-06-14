const initialValue = 0

export function incrementCounter() {
    return {
        type: 'increment',
        payload: 1
    }
}

export function decrementCounter() {
    return {
        type: 'decrement',
        payload: 1
    }
}

export function resetCounter() {
    return {
        type: 'reset'
    }
}

export function counterReducer(state = initialValue, action) {
    switch(action.type) {
        case 'increment':{
            return state + action.payload
        }
        case 'decrement': {
            return state - action.payload
        }
        case 'reset': {
            return initialValue
        }
        default: {
            return state
        }
    }
}