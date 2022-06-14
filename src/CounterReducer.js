const initialValue = 0

function incrementCounter() {
    return {
        type: increment,
        payload: 1
    }
}

function decrementCounter() {
    return {
        type: decrement,
        payload: 1
    }
}

function resetCounter() {
    return {
        type: reset
    }
}

function counterReducer(state = initialValue, action) {
    switch(action) {
        case 'increment':{
            return state + action.payload
        }
        case 'decremenet': {
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