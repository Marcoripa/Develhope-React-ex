const defaultState = [{id: 1, todo: 'Study Redux', completed: false}, {id: 2, todo: 'Workout', completed: true}]

export function addTodo(id, todo, completed) {
    return {
        type: 'add',
        payload: {id, todo, completed}
    }
}

export function deleteTodo(id) {
    return {
        type: 'delete',
        payload: id
    }
}

export function editTodo(id, todo, completed) {
    return {
        type: 'edit',
        payload: {id, todo, completed}
    }
}

export function todosReducer(state = defaultState, action) {
    switch(action.type) {
        case 'add': {
            return [...state, action.payload]
        }
        case 'delete': {
            return state.filter(todo => todo.id !== action.payload)
        }
        case 'edit': {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                }
                return todo
            })
        }
        default: {
            return state
        }
    }
}
